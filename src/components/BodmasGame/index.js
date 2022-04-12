import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function BodmasGame() {
  const [open, setOpen] = useState(false);

  function bodmas() {
    setOpen(false);
    let opsign = ["+", "-", "*", "/"];
    var op1 = Math.floor(Math.random() * 3);
    var op2 = Math.floor(Math.random() * 3);
    var op3 = Math.floor(Math.random() * 3);
    var w = Math.floor(Math.random() * 10 + 1);
    var x = Math.floor(Math.random() * 10 + 1);
    var y = Math.floor(Math.random() * 10 + 1);
    var z = Math.floor(Math.random() * 10 + 1);
    document.getElementById("card").innerHTML =
      x + opsign[op1] + y + opsign[op2] + z + opsign[op3] + w;
    document.getElementById("answer").innerHTML = eval(
      x + opsign[op1] + y + opsign[op2] + z + opsign[op3] + w
    ); //eval
  }

  return (
    <div className="grid-container">
      <div className="item1">EDUWHEEL GAME PLAY</div>
      <div className="item2">
        <h3>Bodmas Game</h3>
      </div>
      <div className="item3">
        <button onClick={bodmas}>Change Question</button>
        <button onClick={() => setOpen(!open)}>Answer</button>
        <hr />
        <div id="card"></div>
        <hr />
        <div style={{ display: open ? "block" : "none" }} id="answer"></div>
      </div>
      <div className="item5">COPYRIGHT 2021-22</div>
    </div>
  );
}
