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

function findMatchingAnimals(beginsWith){
  
}