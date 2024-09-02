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

const sydLocal = new Date ('2024-09-02 20:39:59')
console.log(sydLocal)