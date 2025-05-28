'use client';
import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema, CapacitacaoFormData } from '../../schemas/formValidation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from '@/components/ui/select';
import { ObjectUtils } from '../../utils/objectsUtils';
import { 
  getAreasConhecimento, 
  getDiretorias, 
  getTiposEvento, 
  getModalidades,
  postCadastrarCapacitacao 
} from '../../services/api';

interface Item {
  id: string;
  nome: string;
}

interface FormCapacitacaoProps {
  onSuccess?: (response: unknown) => void;
}

export default function FormCapacitacao({ onSuccess }: Readonly<FormCapacitacaoProps>) {
  // Estados agora recebem array de objetos {id, nome}
  const [diretoria, setDiretoria] = useState<Item[]>([]);
  const [areasConhecimento, setAreasConhecimento] = useState<Item[]>([]);
  const [tiposEventos, setTiposEventos] = useState<Item[]>([]);
  const [modalidades, setModalidades] = useState<Item[]>([]);

  useEffect(() => {
    async function fetchOpcoes() {
      try {
        // Pegando os dados diretamente das funções que fazem fetch na API
        const [resDir, resAreas, resTipos, resModalidades] = await Promise.all([
          getDiretorias(),
          getAreasConhecimento(),
          getTiposEvento(),
          getModalidades(),
        ]);
        setDiretoria(resDir);
        setAreasConhecimento(resAreas);
        setTiposEventos(resTipos);
        setModalidades(resModalidades);
      } catch (error) {
        console.error('Erro ao buscar opções:', error);
      }
    }
    fetchOpcoes();
  }, []);

  const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm<CapacitacaoFormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<CapacitacaoFormData> = async (formData) => {
    const file = formData.certificado[0];

    const formattedData = ObjectUtils.objectToFormData({
      diretoria: formData.diretoria,
      areaConhecimento: formData.areaConhecimento,
      tipoEvento: formData.tipoEvento,
      modalidade: formData.modalidade,  // novo campo modalidades
      tituloEvento: formData.tituloEvento,
      cargaHoraria: formData.cargaHoraria,
      instituicao: formData.instituicao,
      dataInicio: formData.dataInicio,
      dataFim: formData.dataFim,
      dataExpiracao: formData.dataExpiracao,
      certificado: file,
      nome: formData.nome,
      email: formData.email,
      idade: formData.idade,
    });

    try {
      await postCadastrarCapacitacao(formattedData);
      alert('Capacitação cadastrada com sucesso!');
      reset();
      if (onSuccess) {
        onSuccess(Response);
      }
    } catch (error) {
      console.error('Erro ao enviar:', error);
      alert('Erro ao cadastrar capacitação.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4 p-4 max-w-4xl mx-auto bg-white rounded-md shadow-lg">
      {/* Diretoria */}
      <div className="col-span-1">
        <label htmlFor="diretoria" className="block text-sm font-medium text-gray-700">Diretoria</label>
        <Select onValueChange={(value) => setValue("diretoria", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Selecione a diretoria" />
          </SelectTrigger>
          <SelectContent>
            {diretoria.map((item) => (
              <SelectItem key={item.id} value={item.id}>{item.nome}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.diretoria && <span className="text-red-500 text-sm">{errors.diretoria.message}</span>}
      </div>

      {/* Área do Conhecimento */}
      <div className="col-span-1">
        <label htmlFor="areaConhecimento" className="block text-sm font-medium text-gray-700">Área do Conhecimento</label>
        <Select onValueChange={(value) => setValue("areaConhecimento", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Selecione a área do conhecimento" />
          </SelectTrigger>
          <SelectContent>
            {areasConhecimento.map((item) => (
              <SelectItem key={item.id} value={item.id}>{item.nome}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.areaConhecimento && <span className="text-red-500 text-sm">{errors.areaConhecimento.message}</span>}
      </div>

      {/* Tipo de Evento */}
      <div className="col-span-1">
        <label htmlFor="tipoEvento" className="block text-sm font-medium text-gray-700">Tipo de Evento</label>
        <Select onValueChange={(value) => setValue("tipoEvento", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Selecione o tipo de Evento" />
          </SelectTrigger>
          <SelectContent>
            {tiposEventos.map((item) => (
              <SelectItem key={item.id} value={item.id}>{item.nome}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.tipoEvento && <span className="text-red-500 text-sm">{errors.tipoEvento.message}</span>}
      </div>

      {/* Modalidade - NOVO CAMPO */}
      <div className="col-span-1">
        <label htmlFor="modalidade" className="block text-sm font-medium text-gray-700">Modalidade</label>
        <Select onValueChange={(value) => setValue("modalidade", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Selecione a modalidade" />
          </SelectTrigger>
          <SelectContent>
            {modalidades.map((item) => (
              <SelectItem key={item.id} value={item.id}>{item.nome}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.modalidade && <span className="text-red-500 text-sm">{errors.modalidade.message}</span>}
      </div>

      {/* Título do Evento */}
      <div className="col-span-1">
        <label htmlFor="tituloEvento" className="block text-sm font-medium text-gray-700">Título do Evento</label>
        <Input id="tituloEvento" type="text" {...register('tituloEvento')} />
        {errors.tituloEvento && <span className="text-red-500 text-sm">{errors.tituloEvento.message}</span>}
      </div>

      {/* Carga Horária */}
      <div className="col-span-1">
        <label htmlFor="cargaHoraria" className="block text-sm font-medium text-gray-700">Carga Horária</label>
        <Input id="cargaHoraria" type="text" {...register('cargaHoraria')} />
        {errors.cargaHoraria && <span className="text-red-500 text-sm">{errors.cargaHoraria.message}</span>}
      </div>

      {/* Nome da Instituição */}
      <div className="col-span-2">
        <label htmlFor="instituicao" className="block text-sm font-medium text-gray-700">Instituição</label>
        <Input id="instituicao" type="text" {...register('instituicao')} />
        {errors.instituicao && <span className="text-red-500 text-sm">{errors.instituicao.message}</span>}
      </div>

      {/* Datas */}
      <div className="col-span-1">
        <label htmlFor="dataInicio" className="block text-sm font-medium text-gray-700">Data Início</label>
        <Input id="dataInicio" type="date" {...register('dataInicio')} />
      </div>
      <div className="col-span-1">
        <label htmlFor="dataFim" className="block text-sm font-medium text-gray-700">Data Fim</label>
        <Input id="dataFim" type="date" {...register('dataFim')} />
      </div>

      <div className="col-span-2">
        <label htmlFor="dataExpiracao" className="block text-sm font-medium text-gray-700">Data de Expiração</label>
        <Input id="dataExpiracao" type="date" {...register('dataExpiracao')} />
      </div>

      {/* Certificado */}
      <div className="col-span-2">
        <label htmlFor="certificado" className="block text-sm font-medium text-gray-700">Certificado</label>
        <Input id="certificado" type="file" {...register('certificado')} />
      </div>

      {/* Nome */}
      <div className="col-span-2">
        <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome</label>
        <Input id="nome" type="text" {...register('nome')} />
        {errors.nome && <span className="text-red-500 text-sm">{errors.nome.message}</span>}
      </div>

      {/* Email */}
      <div className="col-span-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <Input id="email" type="email" {...register('email')} />
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
      </div>

      {/* Idade */}
      <div className="col-span-1">
        <label htmlFor="idade" className="block text-sm font-medium text-gray-700">Idade</label>
        <Input id="idade" type="number" {...register('idade', { valueAsNumber: true })} />
        {errors.idade && <span className="text-red-500 text-sm">{errors.idade.message}</span>}
      </div>

      {/* Botão */}
      <div className="col-span-2">
        <Button type="submit" className="w-full mt-4 bg-green-600 hover:bg-green-500 text-white">Salvar</Button>
      </div>
    </form>
  );
}
