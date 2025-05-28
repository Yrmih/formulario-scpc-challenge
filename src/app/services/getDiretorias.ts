
export async function getDiretorias() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SCPC_URL}/diretoria`, {
        method: 'GET',
        headers: {
           Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
        next: { revalidate: 3600 },
    });
    if (!response.ok) {
        throw new Error('Erro ao buscar diretorias');
    }
    const data = await response.json();
    return data;
}

// baseURL é: https://homol.services.defensoria.pa.def.br/api-folgas/v1