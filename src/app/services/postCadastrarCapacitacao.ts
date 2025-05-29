export async function postCadastrarCapacitacao(data: FormData) {
  const url = `${process.env.NEXT_PUBLIC_API_SCPC_URL}/capacitacao/cadastrar`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN ?? ''}`,

      },
      body: data,
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao cadastrar capacitação:', error);
    throw error;
  }
}
