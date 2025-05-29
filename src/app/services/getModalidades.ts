// GET /capacitacao-modalidade/list

export async function getModalidades() {
    const url = `${process.env.NEXT_PUBLIC_API_SCPC_URL}/capacitacao-modalidade/list`;

    try {
        const response = await fetch(url, {
            method : 'GET',
            headers: {
                'Authoriztion': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN} ?? ''`,
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
        console.error('Erro ao buscar modalidades:', error);
        throw error;    
    }
}

