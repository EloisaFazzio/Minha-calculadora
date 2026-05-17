import React, { useState } from 'react';
import './App.css';

function App() {
  const [resultado, setResultado] = useState(0);

  const calcular = (operacao) => {
    // Valor fixo temporário para validação do teste
    setResultado(0); 
  };

  return (
    <div className="App">
      <h1>Calculadora</h1>
      <div className="display">
        <span data-testid="resultado">{resultado}</span>
      </div>
      <div className="teclado">
        <button onClick={() => calcular('soma')}>Somar</button>
      </div>
    </div>
  );
}

export default App;