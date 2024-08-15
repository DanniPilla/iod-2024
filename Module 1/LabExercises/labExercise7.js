//Add 2 numbers and return the result

function testAdditionFunction() {
  // test with typical values
  if (additionFunction(5, 1) != 6) {
    throw Error("did not equal 6");
  }

  //test with 0
  if (additionFunction(0, 0) != 0) {
    throw Error("did not equal 6");
  }

  //test with negative numbers
  if (additionFunction(-5, 5) != 0) {
    throw Error("did not equal 6");
  }

  console.log("Tests Passed");
}

//Define the addition function
function additionFunction(a, b) {
  return a + b;
}
console.log(additionFunction(5, 1));
//call the test function
testAdditionFunction();

//Sum of subtracting 'b' value from 'a' value
function testMinusFunction() {
  // test with typical values
  if (testMinusFunction(5, 1) != 4) {
    throw Error("did not equal 4");
  }

  //test with 0
  if (testMinusFunction(5, 0) != 5) {
    throw Error("did not equal 5");
  }

  //test with negative numbers
  if (testMinusFunction(-5, 5) != -10) {
    throw Error("did not equal -10");
  }
  console.log("Tests Passed");
}

//Define the minus function
function minusFunction(a, b) {
  return a - b;
}
console.log(minusFunction(5, 1));

//call the test function
testMinusFunction();

//This function returns the sum of dividing 'a' value from 'b' value

function testDivideFunction() {
  // test with typical values
  if (testDivideFunction(5, 1) != 4) {
    throw Error("did not equal 4");
  }

  //test with 0
  if (testDivideFunction(5, 0) != 5) {
    throw Error("did not equal 5");
  }

  //test with negative numbers
  if (testDivideFunction(-5, 5) != -10) {
    throw Error("did not equal -10");
  }
  console.log("Tests Passed");
}
function divideFunction(a, b) {
  return a / b;
}
console.log(divideFunction(5, 1));

//call the test function
testDivideFunction();

//This function returns the sum of multiple a value by b value
function multiplyFunction(a, b) {
  return a * b;
}
console.log(multiplyFunction(5, 2));
