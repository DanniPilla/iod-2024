//functions

function helloWorld(firstName) 
{ 
console.log('hello world'); 
}
helloWorld(); 


const spliceArray = ["I", "study", "JavaScript", "right", "now"]
const removed = spliceArray.splice(2, 3, "dance")
console.log(removed) // [ 'I', 'study', 'JavaScript' ]
console.log(spliceArray) // [ "Let's", 'dance', 'right', 'now' ]