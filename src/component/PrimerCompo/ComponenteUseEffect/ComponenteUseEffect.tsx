import { useEffect, useState } from "react";

const ComponenteUseEffect = () => {
  const [state, setState] = useState(false);
  useEffect(() => {
    console.log("Estoy");
  }, []);
  useEffect(() => {
    console.log("Componente montado");
    return () => {
      console.log("Componente desmontado");
    };
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div>
      <p>{state ? "Es verdadero" : "Es falso"}</p>
      <button
        onClick={() => {
          setState(!state);
        }}
      ></button>
    </div>
  );
};

export default ComponenteUseEffect;
