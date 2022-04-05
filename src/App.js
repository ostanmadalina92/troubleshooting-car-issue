import "./App.css";
import { useState } from "react";

function App() {
  const obj = {
    one: "Are the battery terminals corroded?",
    two: "Clean terminals and try starting again.",
    three: "Replace cables and try again.",
    four: "Does the car make a clicking noise?",
    five: "Replace the battery.",
    six: "Does the car crank up but fail to start?",
    seven: "Check spark plug connections.",
    eight: "Does the engine start and then died?",
    nine: "Does your car have fuel injection?",
    ten: "Check to ensure the choke is opening and closing.",
    eleven: "Get it in for service.",
    twelve: "Check to ensure the choke is opening and closing.",
  };

  const [yquestion, setYes] = useState("");
  const [ynquestion, setYno] = useState("");
  const [nyquestion, setNoyes] = useState("");
  const [nquestion, setNo] = useState("");
  const [nnquestion, setNono] = useState("");
  const [nnyquestion, setNonoyes] = useState("");
  const [nnnquestion, setNonono] = useState("");
  const [nnnyesquestion, setNononoyes] = useState("");
  const [nnnyesnoquestion, setNononoyesno] = useState("");

  const [countYes, setCountYes] = useState(0);
  const [countYno, setCountYno] = useState(0);
  const [countNo, setCountNo] = useState(0);
  const [countNoyes, setCountNoyes] = useState(0);
  const [countNono, setCountNono] = useState(0);
  const [countNonoyes, setCountNonoyes] = useState(0);
  const [countNonono, setCountNonono] = useState(0);
  const [countNononoyes, setCountNononoyes] = useState(0);
  const [countNononoyesno, setCountNononoyesno] = useState(0);

  function displayYes() {
    if (countYes === 0) {
      return obj.one;
    } else if (countYes === 1) {
      return obj.two;
    }
  }
  function handleYes() {
    setYes(displayYes());
    setCountYes(countYes + 1);
  }

  function displayYno() {
    if (countYno === 0) {
      return obj.one;
    } else if (countYno === 1) {
      return obj.three;
    }
  }
  function handleYno() {
    setYno(displayYno());
    setCountYno(countYno + 1);
  }

  function displayNo() {
    if (countNo === 0) {
      return obj.four;
    }
  }
  function handleNo() {
    setNo(displayNo());
    setCountNo(countNo + 1);
  }

  function displayNoyes() {
    if (countNoyes === 0) {
      return obj.five;
    }
  }
  function handleNoyes() {
    setNoyes(displayNoyes());
    setCountNoyes(countNoyes + 1);
  }

  function displayNono() {
    if (countNo === 0) {
      return obj.four;
    } else if (countNo === 1) {
      return obj.six;
    }
  }
  function handleNono() {
    setNono(displayNono());
    setCountNono(countNono + 1);
  }

  function displayNonoyes() {
    if (countNonoyes === 0) {
      return obj.seven;
    }
  }

  function handleNonoyes() {
    setNonoyes(displayNonoyes());
    setCountNonoyes(countNonoyes + 1);
  }

  function displayNonono() {
    if (countNonono === 0) {
      return obj.eight;
    }
  }

  function handleNonono() {
    setNonono(displayNonono());
    setCountNonono(countNonono + 1);
  }

  function displayNononoyes() {
    if (countNononoyes === 0) {
      return obj.nine;
    } else if (countNononoyes === 1) {
      return obj.eleven;
    }
  }
  function handleNononoyes() {
    setNononoyes(displayNononoyes());
    setCountNononoyes(countNononoyes + 1);
  }

  function displayNononoyesno() {
    if (countNononoyesno === 0) {
      return obj.twelve;
    }
  }
  function handleNononoyesno() {
    setNononoyesno(displayNononoyesno());
    setCountNononoyesno(countNononoyesno + 1);
  }

  return (
    <div className="App">
      <h2 id="mainq">Is the car silent when you turn the key?</h2>
      <div id="container">
        <div id="yes">
          <button onClick={handleYes}>Yes</button>
          <button onClick={handleYno}>No</button>
          <h2>{yquestion}</h2>
          <h2>{ynquestion}</h2>
        </div>

        <div id="no">
          <button onClick={handleNo}>No</button>
          <button onClick={handleNoyes}>Yes</button>
          <h2>{nquestion}</h2>
          <h2>{nyquestion}</h2>
          <button onClick={handleNono}>No</button>
          <button onClick={handleNonoyes}>Yes</button>
          <h2>{nnquestion}</h2>
          <h2>{nnyquestion}</h2>
          <button onClick={handleNonono}>No</button>
          <h2>{nnnquestion}</h2>
          <button onClick={handleNononoyes}>Yes</button>
          <h2>{nnnyesquestion}</h2>
          <button onClick={handleNononoyesno}>No</button>
          <h2>{nnnyesnoquestion}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
