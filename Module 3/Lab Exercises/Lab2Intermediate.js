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
let orc = "Looks like meats back on the menu boys!"
let max = 15

console.log(truncate(orc,max))

//conditional operator version
// truncate = (str1, max) =>
 // str1.length > max
//? "Looks like..."
// : "Looks like meats back on the menu boys!";

//3

const animals = ['Tiger', 'Giraffe']
//a
animals.push("Cat", "Lion")
//b
animals.unshift("Dog", "Bear")
//c
animals.sort();

//d
function replaceMiddleAnimal(animals, newValue) {

  let middleIndex = Math.floor(animals.length/2);
  animals[middleIndex] = newValue;

  return animals;
}

let newValue = 'bird'
let updatedAnimals = replaceMiddleAnimal(animals, newValue);
console.log(updatedAnimals);

//e

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

//b
function currencyAddition(float1, float2){
  const factor = 100; //multiply by 100 to remove floating point issue
  let sum = (float1 * factor + float2 * factor) / factor;
  return parseFloat(sum.toFixed(2));
}

console.log(currencyAddition(fixedTwenty, fixedTen))
console.log(0.3==currencyAddition(fixedTwenty, fixedTen))

//c
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
const cats = ['bengal', 'maine coon', 'tabby', 'bengal']
function unique(duplicatesArray) {
  return [...new Set(duplicatesArray)]; //new Set(duplicatesArray) creates a Set from the duplicatesArray. A Set automatically removes any duplicate values. [...] is the spread operator that takes all the unique values from the Set and spreads them into a new array.
}

console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]
console.log(unique(cats))

//7
//a
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

//b
function getOldBooks(books) {
  // Use filter to get books written before 1950
  const filteredBooks = books.filter(function(book) {
      return book.year <= 1950;
  });

  // Use Set to convert the filtered unique values back into an array
  const uniqueBooks = [...new Set(filteredBooks)];

  return uniqueBooks;
}

console.log(getOldBooks(books));
//c

function addGenre(books) {
  // 'books.map(...)' applies the inner function to each book object in the array.
  return books.map(function(book) {
    // For each book object, a new property 'genre' is added with the value 'classic'.
    book.genre = 'classic';
    // The modified book object is returned.
    return book;
  });
  // The map method returns a new array with all modified book objects.
}

const booksWithGenre = addGenre(books);
console.log(booksWithGenre);

//d

function getTitles(authorInitial){
  //The filter function iterates over each book and checks if the author's name starts with the authorInitial. It returns a new array with only those books.
return books.filter(function(book){
  return book.author.startsWith(authorInitial);
 })
//The map function then takes this filtered array and extracts the title of each book, returning a new array of titles.
.map(function(book) {
  return book.title;
});
  }
  const titles = getTitles('1'); 
  console.log(titles);

//e
function latestBook() {
  let latestYear = -Infinity;
  let latestBook = null;

  //The forEach function iterates over each book in the books array. It compares the year of each book with the current latestYear
  books.forEach(function(book) {
    if (book.year > latestYear) {
      latestYear = book.year;
      latestBook = book;
    }
  });

  return latestBook;
}


const mostRecentBook = latestBook(); 
console.log(mostRecentBook);

//8

const phoneBookABC = new Map() 
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

//a, b
const phoneBookDEF = new Map(); 

phoneBookDEF.set('David', '0466334455');
phoneBookDEF.set('Emily', '0422445566');
phoneBookDEF.set('Frank', '0499887766');

console.log(phoneBookDEF);

//c
phoneBookABC.set('Caroline', '0466778899');

console.log(phoneBookABC);

//d
function printPhoneBook(contacts) {
  contacts.forEach((phoneNumber, name) => {
      console.log(`${name}: ${phoneNumber}`);
  });
}

//e
const phoneBook = new Map ([...phoneBookABC, ...phoneBookDEF])

printPhoneBook(phoneBook)

//9
let salaries = {
  "Timothy" : 35000,
  "David" : 25000,
  "Mary" : 55000,
  "Christina" : 75000,
  "James" : 43000
  };

  function sumSalaries(salaries){
    let total = 0;
    for (let salary of Object.values(salaries)) {
        total += salary;
    }
    return total;
  }

  console.log("Total Salaries:", sumSalaries(salaries));

  function topEarner(salaries) {
    let highestSalary = 0;
    let topEarner = '';

    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > highestSalary) {
            highestSalary = salary;
            topEarner = name;
        }
    }

    return topEarner;
}

console.log("Top Earner:", topEarner(salaries));  

//10
const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString());
console.log(today.getHours() + ' hours have passed so far today');

// a
const minutesPassed = today.getHours() * 60 + today.getMinutes();
console.log(minutesPassed + ' minutes have passed so far today');

// b
const secondsPassed = minutesPassed * 60 + today.getSeconds();
console.log(secondsPassed + ' seconds have passed so far today');

// c 
const birthDate = new Date('1995-01-02');  
const currentDate = new Date();
let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
let ageMonths = currentDate.getMonth() - birthDate.getMonth();
let ageDays = currentDate.getDate() - birthDate.getDate();

if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
}

if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
}

console.log(`I am ${ageYears} years, ${ageMonths} months, and ${ageDays} days old`);

// d 
function daysInBetween(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; // Hours * minutes * seconds * milliseconds
    const diffInTime = Math.abs(date2 - date1);
    const diffInDays = Math.floor(diffInTime / oneDay);
    return diffInDays;
}

const date1 = new Date('2024-01-01');
const date2 = new Date('2024-09-04');
console.log(`There are ${daysInBetween(date1, date2)} days in between the two dates.`);  