import React, { useEffect, useState } from 'react';
import api from '../servicos/metaApi';

function DashboardCampanhas({ token, contaId }) {
  const [campanhas, setCampanhas] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function buscarCampanhas() {
      try {
        const resposta = await api.get(`/${contaId}/campaigns`, {
          params: {
            access_token: token,
            fields: 'id,name,status,daily_budget',
          },
        });
        setCampanhas(resposta.data.data);
      } catch (erro) {
        console.error('Erro ao buscar campanhas:', erro);
        alert('Falha ao conectar com a API Meta');
      } finally {
        setCarregando(false);
      }
    }

    buscarCampanhas();
  }, [token, contaId]);

  return (
    <div>
      <h4 className="mb-3">Campanhas Ativas</h4>
      {carregando ? (
        <p>Carregando dados...</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Status</th>
              <th>Orçamento Diário</th>
            </tr>
          </thead>
          <tbody>
            {campanhas.map((campanha) => (
              <tr key={campanha.id}>
                <td>{campanha.id}</td>
                <td>{campanha.name}</td>
                <td>{campanha.status}</td>
                <td>R$ {(parseInt(campanha.daily_budget) / 100).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default DashboardCampanhas;
