'use client';

import React from 'react';
import { formSchema, FormData } from '../../schemas/formValidation';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from '@/components/ui/select';

export default function FormCapacitacao() {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4 p-4 max-w-4xl mx-auto bg-white rounded-md shadow-lg">
            {/* Diretoria (Select) */}
            <div className="col-span-1">
                <label htmlFor="diretoria" className="block text-sm font-medium text-gray-700">Diretoria</label>
                <Select onValueChange={(value) => setValue("diretoria", value)}>
                    <SelectTrigger>
                        <SelectValue placeholder="Selecione a diretoria" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value='diretoria1'>Diretoria 1</SelectItem>
                        <SelectItem value='diretoria2'>Diretoria 2</SelectItem>
                        <SelectItem value='diretoria3'>Diretoria 3</SelectItem>
                    </SelectContent>
                </Select>
                {errors.diretoria && <span className="text-red-500 text-sm">{errors.diretoria.message}</span>}
            </div>

            {/* Área do Conhecimento (Select) */}
            <div className="col-span-1">
                <label htmlFor="areaConhecimento" className="block text-sm font-medium text-gray-700">Área do Conhecimento</label>
                <Select onValueChange={(value) => setValue("areaConhecimento", value)}>
                    <SelectTrigger>
                        <SelectValue placeholder="Selecione a área do conhecimento" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value='area1'>Área 1</SelectItem>
                        <SelectItem value='area2'>Área 2</SelectItem>
                        <SelectItem value='area3'>Área 3</SelectItem>
                    </SelectContent>
                </Select>
                {errors.areaConhecimento && <span className="text-red-500 text-sm">{errors.areaConhecimento.message}</span>}
            </div>

            {/* Tipo de Evento (Select) */}
            <div className="col-span-1">
                <label htmlFor="tipoEvento" className="block text-sm font-medium text-gray-700">Tipo de Evento</label>
                <Select onValueChange={(value) => setValue("tipoEvento", value)}>
                    <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo de Evento" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="evento1">Evento 1</SelectItem>
                        <SelectItem value="evento2">Evento 2</SelectItem>
                        <SelectItem value="evento3">Evento 3</SelectItem>
                    </SelectContent>
                </Select>
                {errors.tipoEvento && <span className="text-red-500 text-sm">{errors.tipoEvento.message}</span>}
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
                <Input id="certificado" type="text" {...register('certificado')} />
            </div>

            {/* Botão */}
            <div className="col-span-2">
                <Button type="submit" className="w-full mt-4 bg-green-600 hover:bg-green-500 text-white">Salvar</Button>
            </div>
        </form>
    );
};
