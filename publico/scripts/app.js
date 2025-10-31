import React, { useState } from 'react';
import FormularioAutenticacao from './componentes/FormularioAutenticacao';
import DashboardCampanhas from './componentes/DashboardCampanhas';

function App() {
  const [token, setToken] = useState('');
  const [contaId, setContaId] = useState('');

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Análise de Campanhas Meta Ads</h2>
      <FormularioAutenticacao setToken={setToken} setContaId={setContaId} />
      {token && contaId && (
        <DashboardCampanhas token={token} contaId={contaId} />
      )}
    </div>
  );
}

export default App;
