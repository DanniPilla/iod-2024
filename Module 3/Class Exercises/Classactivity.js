//1

function makeDough() {
    const dough = "Making the dough"
 return console.log (dough)
}

function addSauce(){
    const sauce = "Adding canned tomato"
    return console.log(sauce)
}

function addPineapple(){
    const pineapple = "Crazy people like pineapple"
    return console.log (pineapple)
}

function addSalami(){
    const salami = "Add salami"
    return console.log (salami)
}

//arrow function
const addCheese = () =>{
    const cheese = "Mozarella cheese is particularly good"
    return console.log (cheese)
}

//function expression
const letItCook = function () {
    const cook = "Put it in the oven"
    return console.log (cook)
}

//2

// setTimeout(makeDough, 1000);
// setTimeout(addSauce, 2000);
// setTimeout(addPineapple, 3000);
// setTimeout(addSalami, 4000);
// setTimeout(addCheese, 5000);
// setTimeout(letItCook, 6000);

//3
const promise = new Promise(makeDough, resolve, reject) {
    promise.then ((result) => console.log(result))
}
//4

