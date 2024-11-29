const Calculator = require("../libraries/calculator");

const addNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let calculator = new Calculator();
  let sum = calculator.add(number1, number2);
  res.status(200);
  res.json({ result: sum });
};

const subtractNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let calculator = new Calculator();
  let sum = calculator.subtract(number1, number2);
  res.status(200);
  res.json({ result: sum });
};

const divideNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let calculator = new Calculator();
  let sum = calculator.divide(number1, number2);
  res.status(200);
  res.json({ result: sum });
};

const multiplyNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let calculator = new Calculator();
  let sum = calculator.multiply(number1, number2);
  res.status(200);
  res.json({ result: sum });
};

module.exports = {
  multiplyNumbers,
  addNumbers,
  subtractNumbers,
  divideNumbers,
};
