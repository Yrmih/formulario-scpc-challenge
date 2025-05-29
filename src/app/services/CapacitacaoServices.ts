export const postCapacitacao = async (data: FormData) => {
  const url = `${process.env.NEXT_PUBLIC_API_SCPC_URL}/capacitacao`;

  const token = process.env.NEXT_PUBLIC_API_TOKEN;
  if (!token) throw new Error("Token de autorização não encontrado");

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        // Não colocar Content-Type quando body é FormData
      },
      body: data,
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao cadastrar capacitação:', error);
    throw error;
  }
};

export const getCapacitacao = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_SCPC_URL}/capacitacao`;

  const token = process.env.NEXT_PUBLIC_API_TOKEN;
  if (!token) throw new Error("Token de autorização não encontrado");

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store',  // opcional: força sempre buscar do servidor
    });

    if (!response.ok) {
      throw new Error(`Erro ao buscar capacitações: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar capacitações:', error);
    throw error;
  }
};
