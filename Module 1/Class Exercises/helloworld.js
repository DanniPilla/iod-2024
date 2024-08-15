console.log('Hello Danni')
//Task1

//Addition
function additionFunction(a, b) {
  return a + b;
}
console.log(additionFunction(5, 1));

//subtraction
function minusFunction(a, b) {
  return a - b;
}

console.log(minusFunction(5, 1));

//division
function divideFunction(a, b) {
  return a / b;
}

console.log(divideFunction(5, 1));

//multiply
function multiplyFunction(a, b) {
  return a * b;
}
console.log(multiplyFunction(5, 2));

//Task 2
function helloDanni(a, b) {
    return a + b;
}

console.log("Hello", " Danni");

//Class Exercise NPM 
const Sentiment = require('sentiment');
const sentiment = new Sentiment();

function getSentiment(sentence) {
const result = sentiment.analyze('Cats are actually perfect, there is a reason they were seen as gods');
console.log(result); 
}
//Debugging class exercise
console.log('this is a Message')
console.info('this is info')
console.warn('this is a warning')
console.error('this is an error');