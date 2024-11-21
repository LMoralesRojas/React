{
  /*import ContenedorComponente from "./component/PrimerCompo/ContenedorComponente/ContadorComponente";
import { PrimerCompo } from "./component/PrimerCompo/PrimerCompo";
import ComponenteUseEffect from "./component/PrimerCompo/ComponenteUseEffect/ComponenteUseEffect";
import FormularioComponente from "./component/PrimerCompo/FormularioComponente/FormularioComponente";
*/
}
import AppProduct from "./component/PrimerCompo/AppProduct/Header/ListProducts/AppProduct";

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
      {/*<PrimerCompo text={"Texto desde propiedades"} color="red" fontSize={5} />

      {enableContador && <ContenedorComponente />}
      <button
        onClick={() => {
          setEnableContador(!enableContador);
        }}
      >
        Mostrar/Ocultar Contador
      </button>
      <ComponenteUseEffect />
      <FormularioComponente />*/}

      <AppProduct />
    </div>
  );
};

export default App;
