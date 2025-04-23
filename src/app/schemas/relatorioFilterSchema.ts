import {z} from 'zod';

export const relatorioFilterSchema = z.object({
    nome: z.string().optional(),
    tipo: z.enum(['Relatório de Servidores', 'Relatório de Estagiários', 'Relatório de Estagiários e Servidores']).optional(),
    status: z.enum(['Aprovado', 'Rejeitado', 'Pendente']).optional(),
})

export type relatorioFilterSchemaData = z.infer<typeof relatorioFilterSchema>