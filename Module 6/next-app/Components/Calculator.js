"use client";
import { useState } from "react";

export const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let res;

    switch (operator) {
      case "+":
        res = number1 + number2;
        break;
      case "-":
        res = number1 - number2;
        break;
      case "*":
        res = number1 * number2;
        break;
      case "/":
        res = number1 / number2;
        break;
    }
    setResult(res);
  };
  return (
    <div className="Calculator componentBox bg-pink-200 p6 rounded-lg shadow-lg text-center max-w-xs mx-auto mt-10">
      <h1 className="text-4xl font-bold pt-4 m-4 text-pink-700">
        Lets Calculate!
      </h1>
      <form onSubmit={handleCalculate}>
        <label>
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            className="w-20 p-2 mr-2 rounded border-pink-300 focus:border-pink-500 focus:ring-pink-500 text-center "
          />
        </label>
        <select
          className="w-15 p-2 mr-2  rounded border-pink-300 focus:border-pink-500 focus:ring-pink-500 text-center"
          onChange={(e) => setOperator(e.target.value)}
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <label>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            className="w-20 p-2 rounded border-pink-300 focus:border-pink-500 focus:ring-pink-500 text-center"
          />
        </label>
      </form>
      <button className="mt-4 bg-pink-400 text-white  hover:bg-pink-500 p-2 rounded">
        Calculate
      </button>
      <h2 className="text-2xl font-bold pb-4 m-4 text-pink-700">
        Result: {result}
      </h2>
    </div>
  );
};
