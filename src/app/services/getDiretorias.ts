export async function getDiretorias() {
    const token = process.env.NEXT_PUBLIC_API_TOKEN;
    if (!token) throw new Error('Token de autorização não encontrado');
  
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SCPC_URL}/diretoria`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: { revalidate: 3600 }, // mantem se estiver usando ISR, senão remover
    });
  
    if (!response.ok) {
      throw new Error(`Erro ao buscar diretorias: ${response.status} ${response.statusText}`);
    }
  
    const data = await response.json();
    return data;
  }
  