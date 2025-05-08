// /services/api/capacitacao/getCapacitacoes.ts

export async function getCapacitacoes() {
    const url = `${process.env.NEXT_PUBLIC_API_SCPC_URL}/capacitacao`;
  
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN || ''}`,
          
        },
        cache: 'no-store',
      });
  
      if (!response.ok) {
        throw new Error('Erro ao buscar capacitações');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Erro ao buscar capacitações:', error);
      throw error;
    }
  }
  