import React from "react";
import { useContador } from "./useContador"; // Importamos LA MISMA lógica

function CardVertical() {
  // Este contador va a ser totalmente independiente del horizontal
  const { cont, aumentar, disminuir,resetear } = useContador(0);

  return (
    <div className="card-contador">
      <h2>Diseño Vertical</h2>
      <div className="contenedor-boton-vertical">
        <h3 className="numero-contador">{cont}</h3>
        <div className="columna-botones">
          <button className="btn3" onClick={aumentar}>+</button>
          <button className="btn3" onClick={disminuir}>-</button>
        </div>
        <div>
          <button className="btn-reset" onClick={resetear}>reset</button>
        </div> 
      </div>
    </div>
  );
}
export default CardVertical;
