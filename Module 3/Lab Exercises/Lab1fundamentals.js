//1. What are the results of these expressions? (answer first, then use console.log() to check)

console.log("" + 1 + 0); //will display 10 string concatenation
console.log("" - 1 + 0); //will display -1
console.log(true + false); // display 1. true converts to 1 and false to 0
console.log(!true); // display false
console.log(6 / "3"); //2
console.log("2" * "3"); //6
4 + 5 + "px"; //9px
"$" + 4 + 5; //$45
"4" - 2; //2
"4px" - 2; //nan
" -9 " + 5; //-95 because its concatenating with the string rather than adding
" -9 " - 5; //nan
null + 1; // 1
undefined + 1; //nan because undefined cannot be converted into a valid number
undefined == null; // true
undefined === null; //false
" \t \n" - 2; // tab space, new line '-2'

// Which of the below are not giving the right answer? Why are they not correct? How can we
// fix them?
let three = "3";
let four = "4";
let thirty = "30";
//what is the value of the following expressions?
let addition = three + four; //34. To get 7 we can do let addition = number(three) + number(four);
let multiplication = three * four; //12
let division = three / four; //0.75
let subtraction = three - four; //-1
let lessThan1 = three < four; //true
let lessThan2 = thirty < four; //false

// Which of the following console.log messages will print? Why?
if (0) console.log("#1 zero is true"); // 0 is considered false and wont print because no value as 0
if ("0") console.log("#2 zero is true"); // string values are considered true if there is text so will display
if (null) console.log("null is true"); //No. Null is false
if (-1) console.log("negative is true"); //yes. All non 0 numbers are true???
if (1) console.log("positive is true"); //yes same as above

//Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?//
let a = 2,
  b = 3;
let result = `${a} + ${b} is `;
result += a + b < 10 ? "less than 10" : "greater than 10";
//the += is concatenating the result variable value and the string. It would display 5 is less than 10

//Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same.//
getGreeting = (name) => "Hello " + name + "!";
getGreeting();

//6. a) Complete the inigo object by adding a lastName property and including it in the greeting.
//b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead
//prints his famous catch phrase to the console. HINT: see
//https://www.imdb.com/title/tt0093779/characters/nm0001597.
//c) Update getCatchPhrase to use arrow function syntax and a conditional operator.//
const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};
const inigo = {
  firstName: "Inigo",
  lastName: " Montoya",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase(person) {
    if (person.numFingers > 5) {
      return "You killed my father. Prepare to die!";
    }
    return "Nice to meet you.";
  },
};
inigo.greeting(westley);
inigo.greeting(rugen);

getCatchPhrase = (person) =>
  person.numFingers > 5
    ? "You killed my father. Prepare to die!"
    : "Nice to meet you.";
inigo.greeting(westley);
inigo.greeting(rugen);

//7
const basketballGame = {
  score: 0,
  fouls: 0,

  freeThrow() {
    this.score++;
    return this;
  },

  foul() {
    this.fouls++;
    return this;
  },

  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  halfTime() {
    console.log(
      "Halftime score is " + this.score + " Foul count is " + this.fouls
    );
    return this;
  },
  fullTime() {
    console.log(
      "Fulltime score is " + this.score + " Foul count is " + this.fouls
    );
    return this;
  },
};
//modify each of the above object methods to enable function chaining as below:
basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .threePointer()
  .halfTime()
  .fullTime();

//8

const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

const goldCoast = {
  name: "Gold Coast",
  population: 743000,
  state: "QLD",
  founded: "26 January 1788",
  timezone: "Australia/QLD",
};

function getCity(city) {
  for (let property in city) {
    console.log(`${property}: ${city[property]}`);
  }
}

getCity(sydney);
getCity(goldCoast);

//9

let teamSports = ["Hockey", "Cricket", "Volleyball"];
let dog1 = "Bingo";
let cat1 = { name: "Fluffy", breed: "Siberian" };

let moreSports = teamSports;
moreSports.push("Figure Skating");
moreSports.unshift("Ballet");
console.log(moreSports);

let dog2 = dog1;
dog2 = "Lady";
console.log(dog2);

let cat2 = cat1;
cat2.name = "Alponse";
console.log(cat2);

//10
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  this.canDrive = function () {
    return this.age >= 18;
  };
}

const person1 = new Person("Danni", 29);

const person2 = new Person("Alphonse", 2);

console.log(person1);
console.log(person2);

class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }
  canDrive() {
    return this.age >= 18;
  }
}

const person3 = new PersonClass("Gnocchi", 1);
console.log(person3);

console.log(person1.name + " can drive: " + person1.canDrive());
console.log(person2.name + " can drive: " + person2.canDrive());
console.log(person3.name + " can drive: " + person3.canDrive());
