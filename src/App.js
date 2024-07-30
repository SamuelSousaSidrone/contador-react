import { useState } from 'react'
import './App.css';

function App() {

  const [numero, setNumero] = useState(0)

  function aumentar() {
    setNumero(numero + 1)
  }

  function diminuir() {
    setNumero(numero - 1)
  }

  return (
    <div>
      <h1>Contador</h1>
      <p>{numero}</p>
      <button onClick={aumentar()}>Mais</button>
      <button onClick={diminuir()}>Menos</button>
    </div>
  );
}

export default App;
