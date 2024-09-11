function Product(name, price) {
    this.name = name;
    this.price = price;
    this.salePrice = price * .9; // 10% off
    }
    function Food(name, price) {
    Product.call(this, name, price); // inherits from Product with custom context
    this.category = 'food';
    }
    const cheese = new Food('cheese', 5);
    console.log(`${cheese.name} is a ${cheese.category} and costs $${cheese.price} ($${cheese.salePrice} on sale)`);

let animal = { eats: true, sleeps: true, legs: 4, mammal: true }; // inherits from Object prototype
let animalPrototype = Object.getPrototypeOf(animal); // recommended way to get prototype
console.log(animalPrototype); // BUT printing it via console.log is incomplete
console.log(Object.getOwnPropertyNames(animalPrototype)); // prints all prototype (Object) properties

let rabbit1 = { jumps: true };
Object.setPrototypeOf(rabbit1, animal); // NEW recommended way, uses default property descriptor settings
let rabbit2 = Object.create(animal, { // creates a new object from prototype, with custom properties
jumps: { // name of custom 'own' property for rabbit object
value: true, // property descriptor to set the property value
enumerable: true // property descriptor to make this enumerable - otherwise jumps won’t be in for...in
}
});
console.log(rabbit1, rabbit2); // { jumps: true } - only prints 'own' properties, not inherited ones
console.log(rabbit1.legs, rabbit2.legs); // 4 - inherited properties do exist
for (let prop in rabbit1) console.log(`${prop} is ${rabbit1[prop]}`) // own properties, then inherited ones
for (let prop in rabbit2) console.log(`${prop} is ${rabbit2[prop]}`) // own properties, then inherited ones

const obj = {} // simple empty object
console.log( Object.getPrototypeOf(obj) === Object.prototype ) // true: its prototype is Object prototype
console.log( Object.getOwnPropertyNames(Object.getPrototypeOf(obj)) ) // inherited properties from Object prototype
const arr = [] // simple empty array
console.log( Object.getPrototypeOf(arr) === Array.prototype ) // true: its prototype is Array prototype
console.log( Object.getOwnPropertyNames(Object.getPrototypeOf(arr)) ) //inherited properties from prototype

const str = "" // simple empty string
console.log( Object.getPrototypeOf(str) === String.prototype ) // true: its prototype is Array prototype
console.log( Object.getOwnPropertyNames(Object.getPrototypeOf(str)) ) //inherited properties from prototype

const date = new Date(); // simple empty date object
console.log( Object.getPrototypeOf(date) === Date.prototype ) // true: its prototype is Array prototype
console.log( Object.getOwnPropertyNames(Object.getPrototypeOf(date)) )