class Calculator {
  constructor() {
    this.id = Math.floor(Math.random() * 1000);
  }

  #log(result) {
    console.log(`Caulator ID: ${this.id} Result: ${result}`);
  }

  add(num1, num2) {
    const result = num1 + num2;
    this.#log(result);
    return result;
  }

  subtract(num1, num2) {
    const result = num1 - num2;
    this.#log(result);
    return result;
  }

  multiply(num1, num2) {
    const result = num1 * num2;
    this.#log(result);
    return result;
  }

  divide(num1, num2) {
    const result = num1 / num2;
    this.#log(result);
    return result;
  }
}
module.exports = Calculator;
