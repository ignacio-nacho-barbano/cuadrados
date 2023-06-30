import "./App.css";

import Cuadrado from "./components/cuadrado/Cuadrado";

function App() {
  return (
    <div className="contenedor">
      <Cuadrado color="red" />
      <Cuadrado color="blue" />
      <Cuadrado color="orange" />
      <Cuadrado color="green" />
    </div>
  );
}

export default App;
