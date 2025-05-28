import { z } from 'zod';

// Função para verificar se estamos no lado do cliente
const isClientSide = typeof window !== 'undefined';

export const formSchema = z.object({
  diretoria: z.string().min(1, 'A diretoria é obrigatória'),
  areaConhecimento: z.string().min(1, 'A área do conhecimento é obrigatória'),
  tipoEvento: z.string().min(1, 'O tipo de evento é obrigatório'),
  modalidade: z.string().min(1, 'A modalidade é obrigatória'),  // <-- aqui
  tituloEvento: z.string().min(1, 'O título do evento é obrigatório'),
  cargaHoraria: z.string().min(1, 'A carga horária é obrigatória'),
  instituicao: z.string().min(1, 'A instituição é obrigatória'),
  dataInicio: z.string().min(1, 'A data de início é obrigatória'),
  dataFim: z.string().min(1, 'A data de fim é obrigatória'),
  dataExpiracao: z.string().min(1, 'A data de expiração é obrigatória'),

  certificado: isClientSide
    ? z
        .instanceof(FileList)
        .refine((files) => files.length > 0, {
          message: 'O certificado é obrigatório',
        })
    : z.any(),

  nome: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('Digite um e-mail válido'),
  idade: z.coerce.number().min(18, 'A idade deve ser maior ou igual a 18'),
});

export type CapacitacaoFormData = z.infer<typeof formSchema>;
