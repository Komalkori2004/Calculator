import { useState } from "react";
import "./calcu.css";

export default function Calc1() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");
  const [isSecond, setIsSecond] = useState(false);

  const handleNumber = (digit) => {
    if (!isSecond) {
      setNum1(num1 + digit);
    } else {
      setNum2(num2 + digit);
    }
  };

  const handleOperator = (op) => {
    if (num1 !== "") {
      setOperator(op);
      setIsSecond(true);
    }
  };

  const calculate = () => {
    const a = Number(num1);
    const b = Number(num2);
    let res = 0;

    if (operator === "+") res = a + b;
    if (operator === "-") res = a - b;
    if (operator === "*") res = a * b;
    if (operator === "/") res = b !== 0 ? a / b : "Error";

    setNum1(String(res));
    setNum2("");
    setOperator("");
    setIsSecond(false);
  };

  const reset = () => {
    setNum1("");
    setNum2("");
    setOperator("");
    setIsSecond(false);
  };

  return (
    <div className="calculator">
      <div className="display">
        {num1} {operator} {num2}
      </div>

      <div className="buttons">
        {/* Numbers */}
        <button onClick={() => handleNumber("7")}>7</button>
        <button onClick={() => handleNumber("8")}>8</button>
        <button onClick={() => handleNumber("9")}>9</button>
        <button className="operator" onClick={() => handleOperator("/")}>÷</button>

        <button onClick={() => handleNumber("4")}>4</button>
        <button onClick={() => handleNumber("5")}>5</button>
        <button onClick={() => handleNumber("6")}>6</button>
        <button className="operator" onClick={() => handleOperator("*")}>×</button>

        <button onClick={() => handleNumber("1")}>1</button>
        <button onClick={() => handleNumber("2")}>2</button>
        <button onClick={() => handleNumber("3")}>3</button>
        <button className="operator" onClick={() => handleOperator("-")}>−</button>

        <button className="zero" onClick={() => handleNumber("0")}>0</button>
        <button className="equal" onClick={calculate}>=</button>
        <button className="operator" onClick={() => handleOperator("+")}>+</button>

        <button className="clear" onClick={reset}>C</button>
      </div>
    </div>
  );
}
