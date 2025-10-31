import React, { useState } from 'react';

function FormularioAutenticacao({ setToken, setContaId }) {
  const [entradaToken, setEntradaToken] = useState('');
  const [entradaConta, setEntradaConta] = useState('');

  function enviarDados(e) {
    e.preventDefault();
    setToken(entradaToken);
    setContaId(entradaConta);
  }

  return (
    <form onSubmit={enviarDados} className="mb-4">
      <div className="mb-3">
        <label className="form-label">Token de Acesso</label>
        <input
          type="text"
          className="form-control"
          value={entradaToken}
          onChange={(e) => setEntradaToken(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">ID da Conta de Anúncios</label>
        <input
          type="text"
          className="form-control"
          value={entradaConta}
          onChange={(e) => setEntradaConta(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Carregar Campanhas</button>
    </form>
  );
}

export default FormularioAutenticacao;
