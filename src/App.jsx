import { useState } from "react";
import "./App.css";

function CalcDisplay({ dispValue }) {
  return <div className="display">{dispValue}</div>;
}

function CalcButton({ buttonLabel, onClick, className = "" }) {
  return (
    <button className={className} onClick={onClick}>
      {buttonLabel}
    </button>
  );
}

function App() {
  const [disp, setDisp] = useState("0");
  const [operand1, setOperand1] = useState(null);
  const [operand2, setOperand2] = useState(null);
  const [operation, setOperation] = useState(null);

  const clearHandler = () => {
    setDisp("0");
    setOperand1(null);
    setOperand2(null);
    setOperation(null);
  };

  const operationButtonClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerText;
    if (operand1 !== null) {
      setOperation(value);
      setDisp(value);
    }
  };

  const equalButtonClickHandler = (e) => {
    e.preventDefault();
    if (operand1 === null || operand2 === null || !operation) return;

    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);
    let result = 0;

    if (operation === "+") {
      result = num1 + num2;
    } else if (operation === "-") {
      result = num1 - num2;
    } else if (operation === "x") {
      result = num1 * num2;
    } else if (operation === "÷") {
      result = num2 === 0 ? "Error" : num1 / num2;
    }

    setDisp(result);
    setOperand1(result === "Error" ? null : String(result));
    setOperand2(null);
    setOperation(null);
  };

  const numButtonClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerText;

    if (operation === null) {
      if (operand1 === null) {
        setDisp(value);
        setOperand1(value);
      } else {
        const nextVal = operand1 + value;
        setDisp(nextVal);
        setOperand1(nextVal);
      }
    } else {
      if (operand2 === null) {
        setDisp(value);
        setOperand2(value);
      } else {
        const nextVal = operand2 + value;
        setDisp(nextVal);
        setOperand2(nextVal);
      }
    }
  };

  const showSurname = () => {
    setDisp("Phillip Rae Culala");
  };

  return (
    <div className="App">
      <div className="Header">
        Calculator of Phillip Rae Culala - IT3A
        <div className="Calculator">
          <CalcDisplay dispValue={disp} />
          <div className="Keypad">
            <CalcButton buttonLabel={7} onClick={numButtonClickHandler} />
            <CalcButton buttonLabel={8} onClick={numButtonClickHandler} />
            <CalcButton buttonLabel={9} onClick={numButtonClickHandler} />
            <CalcButton 
              buttonLabel={"÷"} 
              onClick={operationButtonClickHandler} 
              className="btn-op" 
            />

            <CalcButton buttonLabel={4} onClick={numButtonClickHandler} />
            <CalcButton buttonLabel={5} onClick={numButtonClickHandler} />
            <CalcButton buttonLabel={6} onClick={numButtonClickHandler} />
            <CalcButton 
              buttonLabel={"x"} 
              onClick={operationButtonClickHandler} 
              className="btn-op" 
            />

            <CalcButton buttonLabel={1} onClick={numButtonClickHandler} />
            <CalcButton buttonLabel={2} onClick={numButtonClickHandler} />
            <CalcButton buttonLabel={3} onClick={numButtonClickHandler} />
            <CalcButton 
              buttonLabel={"-"} 
              onClick={operationButtonClickHandler} 
              className="btn-op" 
            />

            <CalcButton 
              buttonLabel={"C"} 
              onClick={clearHandler} 
              className="btn-clear" 
            />
            <CalcButton buttonLabel={0} onClick={numButtonClickHandler} />
            <CalcButton 
              buttonLabel={"="} 
              onClick={equalButtonClickHandler} 
              className="btn-equal" 
            />
            <CalcButton 
              buttonLabel={"+"} 
              onClick={operationButtonClickHandler} 
              className="btn-op" 
            />
          </div>

          <button className="surname" onClick={showSurname}>
            CULALA
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;