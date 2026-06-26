import React from "react";
import { useContador} from "./useContador.jsx";

function CardHorizontal () {
  //Traemos el "cerebro" del contador para usar en esta tarjeta
  const { cont, aumentar, disminuir, resetear } = useContador(0);

  return (
    <div className="card-contador">
      <h2>Diseño Horizontal</h2>
        <div className="contenedor-boton-horizontal">
          <button className="btn2" onClick = {disminuir} >-</button>
          <h3>{cont}</h3>
          <button className="btn2" onClick = {aumentar} >+</button>
          <button className="btn-reset" onClick = {resetear}>reset</button>
        </div>
    </div>
  );
}

export default CardHorizontal;
