'use client';

import React from 'react';
import { formSchema, FormData } from "@/app/schemas/formValidation";
// import { Button } from '@/components/ui/button';

// depois eu tenho que separar os imports dos componentes ui do shadcn
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form'; //importando o useform e o submitHandler
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectItem } from '@/components/ui/select';

export default function FormCapacitacao() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
    };
    // const form = useForm<z.infer<typeof formSchema>>({  eu poderia usar essa alternativa chamada de "tipo inline" sem nem precisar exportar...
    //     resolver: zodResolver(formSchema),  ...o FormData
    //   });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 max-w-lg mx-auto bg-white rounded-md shadow-lg">
            {/* Diretoria (Select) */}
            <div>
                <label htmlFor="diretoria" className="block text-sm font-medium text-gray-700"></label>
                <Select 
                    {...register("diretoria")}
                    {...errors.diretoria && <span className='text-red-500 text-m'>{errors.diretoria.message}</span>}
                >
                
                    <SelectItem value='dark' >Diretoria 1</SelectItem>
                    <SelectItem value='dark'>Diretoria 2</SelectItem>
                    <SelectItem value='dark'>Diretoria 3</SelectItem>
                </Select>
            </div>
            {/* Área do Conhecimento (Select) */}
            <div>
                <label htmlFor="areadoconhecimento"></label>
                <Select
                    {...register("areaConhecimento")}
                    {...errors.areaConhecimento && <span className=''>{errors.areaConhecimento.message}</span>}

                >
                    <SelectItem value='dark'>Área 1</SelectItem>
                    <SelectItem value='dark'>Área 2</SelectItem>
                    <SelectItem value='dark'>Área 3</SelectItem>
                </Select>
            </div>
            {/* Tipo de Evento (Select) */}
            <div>
                <label htmlFor="tipoEvento"></label>
                <Select
                    {...register("tipoEvento")}
                    {...errors.areaConhecimento && <span className=''>{errors.areaConhecimento.message}</span>}
                >
                    <SelectItem value="dark">Evento 1</SelectItem>
                    <SelectItem value="dark">Evento 2</SelectItem>
                    <SelectItem value="dark">Evento 3</SelectItem>
                </Select >
            </div>
            {/* Título do Evento (TextField) */}
            <div>
                <label htmlFor="tituloEvento"></label>
                <Input id="tituloEvento"
                    type="text"
                    {...register('tituloEvento')}
                    className="mt-1"
                />
            </div>
            {/* Carga Horária (TextField) */}
            <div>
                <label htmlFor="cargaHoraria"></label>
                <Input id="cargaHoraria"
                    type="text"
                    {...register('cargaHoraria')}
                    className="mt-1"
                />
            </div>
            {/* Nome da Instituição (TextField) */}
            <div>
                <label htmlFor="instituicao"></label>
                <Input id="instituicao"
                    type="text"
                    {...register('instituicao')}
                    className="mt-1"
                />
            </div>
            {/* Data do início da Capacitação (TextField) */}
            <div>
                <label htmlFor="dataInicio"></label>
                <Input id="dataInicio"
                    type="text"
                    {...register('dataInicio')}
                    className="mt-1"
                />
            </div>
            {/* Data do fim da Capacitação (TextField) */}
            <div>
                <label htmlFor="dataFim"></label>
                <Input id="dataFim"
                    type="text"
                    {...register('dataFim')}
                    className="mt-1" />
            </div>
            {/* Data da Expiração da Capacitação (TextField) */}
            <div>
                <label htmlFor="dataExpiracao"></label>
                <Input id="dataExpiracao"
                    type="text"
                    {...register('dataExpiracao')}
                    className="mt-1"
                />
            </div>
            {/* Certificado (Campo de Arquivo) */}
            <div>
                <label htmlFor="certificado"></label>
                <Input id="certificado"
                    type="text"
                    {...register('certificado')}
                    className="mt-1"
                />
            </div>
            {/* Botão de salvar*/}
            <div>
                <Button type="submit" className="w-full mt-4">Salvar</Button>
            </div>
        </form>
    );
};

