import { z } from 'zod';
//validando os campos do form
  export const formSchema = z.object({
    diretoria: z.string().min(1, 'A diretoria é obrigatória'), // encadeamento de métodos do Zod.
    areaConhecimento: z.string().min(1, 'A diretoria é obrigatória'), 
    tipoEvento: z.string().min(1, 'A diretoria é obrigatória'),
    tituloEvento: z.string().min(1, 'A diretoria é obrigatória'),
    cargaHoraria: z.string().min(1, 'A diretoria é obrigatória'),
    instituicao: z.string().min(1, 'A diretoria é obrigatória'),
    dataInicio: z.string().min(1, 'A diretoria é obrigatória'),
    dataFim: z.string().min(1, 'A diretoria é obrigatória'),
    dataExpiracao: z.string().min(1, 'A diretoria é obrigatória'),
    certificado: z.instanceof(FileList).refine(files => files.length > 0, { //um aquivo pra ser enviado.
      message: 'O certificado é obrigatório',

    }),
     nome: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
     email: z.string().email('Digite um e-mail válido'),
     idade: z.number().min(18, 'A idade deve ser maior ou igual a 18'),
   });

  export type FormData = z.infer<typeof formSchema>;