export async function getAreasConhecimento() {
    const url = `${process.env.NEXT_PUBLIC_API_SCPC_URL}/capacitacao-area-conhecimento/list`;
  
    const token = process.env.NEXT_PUBLIC_API_TOKEN;
    if (!token) throw new Error("Token de autorização não encontrado");
  
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      });
  
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao buscar áreas de conhecimento:', error);
      throw error;
    }
  }
  