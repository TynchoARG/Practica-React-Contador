import React, { useRef, useState } from "react";
import Confetti from "js-confetti";
import Contador from "./Contador.jsx";
import CardHorizontal from "./CardHorizontal.jsx";
import CardVertical from "./CardVertical.jsx";
import "./style.css";

const confetti = new Confetti();

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    confetti.addConfetti();
    setCount((c) => c + 1);
  };

  return (
    <div>
        <h3>Contador original</h3>
        <button className="btn" onClick={handleClick}>
        <span role="img" aria-label="react-emoji">
        ⚛️
        </span>{" "}
        {count}
        </button>
        <button className="btn" onClick = {() => setCount(0)}>reset</button>
        <Contador/>
        <div className="contenedor-botones-separados">
          <CardHorizontal/>
          <CardVertical/>
        </div>
    </div>  
    
  );
};

export default App;
