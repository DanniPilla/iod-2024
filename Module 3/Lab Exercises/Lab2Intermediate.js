//1

function gandalf (str){
  
   let newString="";
   let words = str.split(" ");

   for (let word of words) {
   if (newString.length != 0) {
   newString += " ";
 }
 newString += word.charAt(0).toUpperCase() + word.substring(1);
}
return newString;
}
let str = "Oh... you would not part an old man from his walking stick?"
console.log (gandalf(str));

//2

function truncate(str1, max){
  if (str1.length > max){
    return "Looks like..."
  }
  return "Looks like meats back on the menu boys!"
}
let str1 = "Looks like meats back on the menu boys!"
let max = 15

console.log(truncate(str1,max))

//conditional operator version
// truncate = (str1, max) =>
 // str1.length > max
//? "Looks like..."
// : "Looks like meats back on the menu boys!";

//3

const animals = ['Tiger', 'Giraffe']
animals.push("Cat", "Lion")
animals.unshift("Dog", "Bear")
animals.sort();

function replaceMiddleAnimal(animals, newValue) {

  let middleIndex = Math.floor(animals.length/2);
  animals[middleIndex] = newValue;

  return animals;
}

let newValue = 'bird'
let updatedAnimals = replaceMiddleAnimal(animals, newValue);
console.log(updatedAnimals);

function findMatchingAnimals(animals, beginsWith){

  let lowerCase = beginsWith.toLowerCase();

  let matchingAnimals = animals.filter(animal =>
    animal.toLowerCase().startsWith(lowerCase)
  );
  return matchingAnimals;

};

let beginsWith = 'D';
let matchingAnimals = findMatchingAnimals(animals, beginsWith);
console.log(matchingAnimals);

//4
function camelCase(cssProp){
  let words = cssProp.split('-');
  for (let i = 1; i < words.length; i++) {
    // Capitalize the first letter of each word
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
}

// Join the words back into a single string
return words.join('');
}

//for of
function camelCase(cssProp) {
  let words = cssProp.split('-');
  let result = words[0];

  let index = 0;
  for (let word of words) {
      if (index > 0) {
          result += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      index++;
  }

  return result;
}

//for each
function camelCase(cssProp) {
  let words = cssProp.split('-');
  let result = words[0];

  words.forEach((word, index) => {
      if (index > 0) {
          result += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
  });

  return result;
}

//ternary
function camelCase(cssProp) {
  let words = cssProp.split('-');

  for (let i = 1; i < words.length; i++) {
      words[i] = words[i] ? words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() : words[i];
  }

  return words.join('');
}

// without conditional operator

function camelCase(cssProp) {
  let words = cssProp.split('-');

  for (let i = 1; i < words.length; i++) {
      if (words[i]) {
          words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
      }
  }

  return words.join('');
}


console.log(camelCase('margin-left')); // Output: marginLeft
console.log(camelCase('background-image')); // Output: backgroundImage
console.log(camelCase('display')); // Output: display


//5
let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004
//it also seems like there is a "floating point" issue. 
let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
//they are being converted to strings and so instead of adding them as numeric values they are being concatenated as strings with the initial way console was logging it. 

function currencyAddition(float1, float2){
  const factor = 100; //multiply by 100 to remove floating point issue
  let sum = (float1 * factor + float2 * factor) / factor;
  return parseFloat(sum.toFixed(2));
}

console.log(currencyAddition(fixedTwenty, fixedTen))
console.log(0.3==currencyAddition(fixedTwenty, fixedTen))

function currencyOperation(float1, float2, operation) {
  const factor = 100
  let result;

  switch (operation) {
    case '+':
      result = (float1 * factor + float2 * factor) / factor;
      break;
   
      case '-':
      result = (float1 * factor - float2 * factor) / factor;
      break;
    
      case '*':
      result = (float1 * factor * float2 * factor) / factor;
      break;
      
      case '/':
      result = (float1 * factor / float2 * factor) / factor;
      break;
  }
  return parseFloat(result.toFixed(2)); // Ensure the result has 2 decimal places
}

console.log(currencyOperation(fixedTen, fixedTwenty, '-'));

//6

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]

function unique(duplicatesArray) {
  return [...new Set(duplicatesArray)]; //new Set(duplicatesArray) creates a Set from the duplicatesArray. A Set automatically removes any duplicate values. [...] is the spread operator that takes all the unique values from the Set and spreads them into a new array.
}

console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]

//7
const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
  { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
  { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
  ];

  function getBookTitle(bookId) {
    const book = books.find(function(b) {
        return b.id === bookId;
    });

    // Check if a book was found
    if (book) {
        return book.title;
    } else {
        return 'Book not found';
    }
}

console.log(getBookTitle(1))
const bookAge = books.filter(getOldBooks);

function getOldBooks(bookId){

  if()
  return bookId <= 1955;
}
console.log(getOldBooks(1))