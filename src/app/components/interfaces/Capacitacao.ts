export interface Capacitacao {
    id: number;
    nome: string;
    cargaHorariaEstimada: number;
    nomeInstituicao: string;
    inicioCurso: string;
    finalCurso: string;
    dataExpedido: string;
    situacao: string;
    resourceUrl: string;
    diretoria: {
      nome: string;
    };
  }
  