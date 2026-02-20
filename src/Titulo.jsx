import { use, useState } from "react";

function Titulo({cor}) {
  const [texto, setTexto] = useState('Titulo Inicial')
  const [input, setInput] = useState('')

  function clicou() {
    setTexto(input)
  }

  return (
    <div>
      <h1 style={{ color:cor }}> {texto} </h1>
      <input value={input} onChange={(e) => {setInput(e.target.value)} } type="text" />
      <button onClick={clicou} >mudar</button>

    </div>
  );
}

export default Titulo;
