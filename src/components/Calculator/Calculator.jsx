import { useState, useEffect } from "react";
import Display from "../Display/Display";
import Actions from "../Actions/Actions";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const precedence = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
  };

  const applyOperator = (a, b, operator) => {
    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return b === 0 ? "Error" : a / b;
      default:
        return "Error";
    }
  };

  const calculate = (exp) => {
    const numbers = [];
    const operators = [];

    const tokens = exp.match(/\d+\.?\d*|[+\-*/]/g);
    if (!tokens) return "Error";

    for (const token of tokens) {
      if (!isNaN(token)) {
        numbers.push(parseFloat(token));
      } else {
        while (
          operators.length &&
          precedence[operators.at(-1)] >= precedence[token]
        ) {
          const b = numbers.pop();
          const a = numbers.pop();
          const op = operators.pop();

          const res = applyOperator(a, b, op);
          if (res === "Error") return "Error";

          numbers.push(res);
        }
        operators.push(token);
      }
    }

    while (operators.length) {
      const b = numbers.pop();
      const a = numbers.pop();
      const op = operators.pop();

      const res = applyOperator(a, b, op);
      if (res === "Error") return "Error";

      numbers.push(res);
    }

    return numbers[0];
  };

  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput("");
      setResult(0);
      return;
    }

    if (value === "⌫") {
      setInput((prev) => prev.slice(0, -1));
      return;
    }

    if (value === "=") {
      if (!input) return;
      const res = calculate(input);
      setResult(res);
      if (res !== "Error") {
        setInput(String(res));
      }
      return;
    }

    setInput((prev) => prev + value);
  };

  //  клавиатура
  useEffect(() => {
    const handleKeyDown = (e) => {
      const { key } = e;

      if (/\d/.test(key)) {
        handleButtonClick(key);
      }

      if (["+", "-", "*", "/"].includes(key)) {
        handleButtonClick(key);
      }

      if (key === ".") {
        handleButtonClick(".");
      }

      if (key === "Enter") {
        e.preventDefault();
        handleButtonClick("=");
      }

      if (key === "Backspace") {
        handleButtonClick("⌫");
      }

      if (key === "Escape") {
        handleButtonClick("C");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [input]);

  return (
    <div className="calculator">
      <Display showInput={input} result={result} />
      <Actions handleButtonClick={handleButtonClick} />
    </div>
  );
};

export default Calculator;




// стек структура данных для калькулятора, позволяющая обрабатывать ввод пользователя и вычислять результаты.

// ввод с клавиатуры

// Axios для выполнения HTTP-запросов к внешним API, если калькулятор будет иметь функции, требующие данных из интернета.