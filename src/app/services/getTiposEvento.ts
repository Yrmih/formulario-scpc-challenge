export async function getTiposEvento() {
  const token = process.env.NEXT_PUBLIC_API_TOKEN ?? '';
  const url = `${process.env.NEXT_PUBLIC_API_SCPC_URL}/capacitacao-tipo-evento/list`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar tipos de evento');
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar tipos de evento:', error);
    return null;
  }
}
