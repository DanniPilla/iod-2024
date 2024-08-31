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


}


//5
let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);

let sum = parseFloat(fixedTwenty) + parseFloat(fixedTen);

console.log(`${twentyCents} + ${tenCents} = ${sum}`); 
//they are being converted to strings and so instead of adding them as numeric values they are being concatenated as strings