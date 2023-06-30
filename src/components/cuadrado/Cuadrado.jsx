import "./Cuadrado.css";
import { useState } from "react";

// Construir 4 cuadrados iguales con diferentes colores, cuando se haga click en cualquiera de estos cuadrados, el color de ese mismo cuadrado tiene que cambiar.
const Cuadrado = (props) => {
  const [clickeado, setClickeado] = useState(false);
  let clasesExtra = "";

  if (clickeado) {
    clasesExtra = "clickeado";
  }

  return (
    <div
      onClick={() => {
        setClickeado(!clickeado);
      }}
      className={`cuadrado ${props.color} ${clasesExtra}`}
    ></div>
  );
};

export default Cuadrado;
