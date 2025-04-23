'use client';


import { relatorioFilterSchema, relatorioFilterSchemaData } from "../../schemas/relatorioFilterSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Select, SelectTrigger, SelectItem, SelectValue, SelectContent } from "@/components/ui/select";

const mockData = [
    { id: 1, name: 'Noemy Amorim', description: 'Descrição do Relatório 1', tipo: 'Relatório de Servidores', data: '2023-10-01', status: 'Aprovado' },
    { id: 2, name: 'Héctor Baunilha', description: 'Descrição do Relatório 2', tipo: 'Relatório de Servidores', data: '2023-10-02', status: 'Aprovado' },
    { id: 3, name: 'Caio Porre', description: 'Descrição do Relatório 3', tipo: 'Relatório de Servidores', data: '2023-10-03', status: 'Rejeitado' },
    { id: 4, name: 'Ian Lima', description: 'Descrição do Relatório 4', tipo: 'Relatório de Servidores', data: '2023-10-04', status: 'Pendente' },
];


export default function RelatoriosServidores(){
    const {register, handleSubmit, setValue, formState: {errors}} = useForm<relatorioFilterSchemaData>({
        resolver: zodResolver(relatorioFilterSchema),
    });
    const onSubmit = (data: relatorioFilterSchemaData) => {
        console.log("Dados do filtro", data);
        // aqui posso fazer a chamada para a API com os dados do formulário
    }
    return(
        <div className="p-4 max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-4">Relatórios Servidores</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {/* Nome */}
                <div>
                   <Input placeholder="Nome"  {...register("nome")}/>
                   {errors.nome && <span className="text-red-500 text-sm">{errors.nome.message}</span>}
                </div>
                {/* Tipo */}
                <div>
                    <Select onValueChange={(Value) => setValue("tipo", Value)}>
                    <SelectTrigger>
                        <SelectValue placeholder="Tipo de Relatório" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Capacitação"></SelectItem>
                        <SelectItem value="Folga"></SelectItem>
                        <SelectItem value="Pecúnia"></SelectItem>
                    </SelectContent>    
                    </Select>
                    {errors.tipo && <span className="text-red-500 text-sm">{errors.tipo.message}</span>}
                </div>
                {/* Status */}
                <div>
                    <Select onValueChange={(Value) => setValue("status", Value)}>
                    <SelectTrigger>
                        <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    </Select>
                </div>
                <div>
                   <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                        Filtrar
                   </Button>
                </div>
            </form>

        </div>
    )
}