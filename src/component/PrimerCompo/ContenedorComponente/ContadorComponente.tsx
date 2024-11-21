import { useState } from "react";

const ContenedorComponente = () => {
  const [contador, setContador] = useState<number>(0);

  const incrementarContador = () => {
    setContador((prev) => prev + 1);
  };

  const decrementarContador = () => {
    if (contador > 0) {
      setContador((prev) => prev - 1);
    }
  };

  return (
    <div>
      <h2>VALOR DE CONTADOR: {contador}</h2>
      <button onClick={incrementarContador}>Incrementar</button>
      <button onClick={decrementarContador}>Decrementar</button>
    </div>
  );
};

export default ContenedorComponente;
