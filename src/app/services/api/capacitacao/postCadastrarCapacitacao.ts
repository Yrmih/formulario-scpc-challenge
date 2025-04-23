export interface CapacitacaoData {
    //criar interface com os campos que o backend espera.
}


export async function postCadastrarCapacitacao(data: CapacitacaoData) {
    const url = `${process.env.NEXT_PUBLIC_API_SCPC_URL}/capacitacao/cadastrar`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN || ''}`,
                'Content-Type': 'application/json',
            },
                body: JSON.stringify(data),
            
            });
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.statusText}`);
            }
            const responseData = await response.json();
            return responseData;
        } catch (error) {
            console.error('Erro ao cadastrar capacitação:', error);
            throw error;
        }
    }

    // tipoEventoId: number;
    // titulo: string;
    // cargaHoraria: number;
    // instituicao: string;
    // dataInicio: string;
    // dataConclusao: string;
    // dataCertificado: string;
    // modalidade: string;
    // areaConhecimento: string;
    // diretoria: string;
    // emailServidor: string;