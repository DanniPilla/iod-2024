"use client";
import { useState } from "react";

export const TryingSomething = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const handleDigitClick = (digit) => {
    // If we're waiting for the second operand, reset display and turn off waiting mode
    if (waitingForSecondOperand) {
      setDisplayValue(digit);
      setWaitingForSecondOperand(false);
    } else {
      setDisplayValue(displayValue === "0" ? digit : displayValue + digit);
    }
  };

  const handleOperatorClick = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (operator && waitingForSecondOperand) {
      setOperator(nextOperator);
      return;
    }

    if (firstOperand == null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = performCalculation(operator, firstOperand, inputValue);
      setDisplayValue(String(result));
      setFirstOperand(result);
    }

    setOperator(nextOperator);
    setWaitingForSecondOperand(true);
  };

  const performCalculation = (operator, firstOperand, secondOperand) => {
    switch (operator) {
      case "+":
        return firstOperand + secondOperand;
      case "-":
        return firstOperand - secondOperand;
      case "*":
        return firstOperand * secondOperand;
      case "/":
        return firstOperand / secondOperand;
      default:
        return secondOperand;
    }
  };

  const handleClear = () => {
    setDisplayValue("0");
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const handleEquals = () => {
    if (operator && firstOperand != null) {
      const result = performCalculation(
        operator,
        firstOperand,
        parseFloat(displayValue)
      );
      setDisplayValue(String(result));
      setFirstOperand(result);
      setOperator(null);
      setWaitingForSecondOperand(false);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        {/* Digit Buttons */}
        <button onClick={() => handleDigitClick("7")}>7</button>
        <button onClick={() => handleDigitClick("8")}>8</button>
        <button onClick={() => handleDigitClick("9")}>9</button>
        <button onClick={() => handleOperatorClick("/")}>÷</button>

        <button onClick={() => handleDigitClick("4")}>4</button>
        <button onClick={() => handleDigitClick("5")}>5</button>
        <button onClick={() => handleDigitClick("6")}>6</button>
        <button onClick={() => handleOperatorClick("*")}>×</button>

        <button onClick={() => handleDigitClick("1")}>1</button>
        <button onClick={() => handleDigitClick("2")}>2</button>
        <button onClick={() => handleDigitClick("3")}>3</button>
        <button onClick={() => handleOperatorClick("-")}>-</button>

        <button onClick={() => handleDigitClick("0")}>0</button>
        <button onClick={handleClear}>AC</button>
        <button onClick={handleEquals}>=</button>
        <button onClick={() => handleOperatorClick("+")}>+</button>
      </div>
    </div>
  );
};
