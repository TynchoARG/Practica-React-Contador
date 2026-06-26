import React from "react";
import {useState} from "react";

  function Contador() {
    const [cont, setCont] = useState(0)
    return(
      <div className="contenedor-botones-espejo">
        <h1>Contador Personalizado</h1>
        <h2>Botones Horizontales</h2>
        <div className="contenedor-boton-horizontal">
          <button className="btn2" onClick = {() => setCont(cont - 1)} >-</button>
          <h3>{cont}</h3>
          <button className="btn2" onClick = {() => setCont(cont + 1)} >+</button>
        </div>
        <h2>Botones Verticales</h2>
        <div className="contenedor-boton-vertical">
          <h3 className="numero-contador">{cont}</h3>
          <div className="columna-botones">
            <button className="btn3" onClick = {() => setCont(cont + 1)} >+</button>
            <button className="btn3" onClick = {() => setCont(cont - 1)} >-</button>
          </div>
        </div>
      </div>
    )
  }
        
 export default Contador;
