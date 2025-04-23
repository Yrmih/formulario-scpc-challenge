

export async function getAreasConhecimento() {
    const url = `${process.env.NEXT_PUBLIC_API_SCPC_URL}/capacitacao-area-conhecimento/list`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': process.env.NEXT_PUBLIC_API_TOKEN || '',
                'Content-Type': 'application/json',
            },
            cache: 'no-store',
        });

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar áreas de conhecimento:', error);
        throw error;
    }
}

// Esse endpoint faz parte do controller area-conhecimento-capacitacao-controller.