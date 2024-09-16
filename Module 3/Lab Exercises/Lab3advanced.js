//1
function makeCounter(startFrom = 0, incrementBy= 1) {
    let currentCount = startFrom;
    return function() {
    currentCount++;
    console.log(currentCount)
    return currentCount, incrementBy;
    }; 
    }

    let counter1 = makeCounter(0, 1);
    let counter2 = makeCounter(1, 2);
    counter1(); // 1
    counter2(); // 2
    counter1(); // 1
    counter2(); // 2counter1(); // 1
    counter2(); // 2counter1(); // 1
    counter2(); // 2


//2

 delayMsg = (msg) => {
console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')

//a
// #4 to appear first as no delay parameter coded, then #3, #2, #1


let cancelledTimerId = setTimeout(delayMsg, 1000, '#5: Delayed by 1000ms')
clearTimeout(cancelledTimerId); 
setTimeout( () => console.log("Cancelled timeout"), 1000)

//3

function debounce(func, ms = 1000) { //If no delay is passed when calling debounce, it will use the default 1000ms delay.
    let timeoutId; //Initially, it doesn’t need to be defined, as no function execution has been scheduled yet. It will be defined when the function is called for the first time and a timeout is set.

    return function(...args) {
        // Clear the timeout if there's a pending one
        clearTimeout(timeoutId);

        // Set a new timeout to execute the function after the delay
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, ms);
    };
}
function printMe(msg) {
    console.log('printing debounced message' + msg);
    }
    printMe = debounce(printMe, 2000); //create this debounce function for a)


    //fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
    setTimeout(() => printMe('first call'), 100);
    setTimeout(() => printMe('second call'), 200);
    setTimeout(() => printMe('third call'), 300);

//     //4

//     function printFibonacci() {
//         let a = 0, b = 1; // Starting values for the Fibonacci sequence
    
//         setInterval(function() {
//             console.log(b);
//             let next = a + b;
//             a = b;
//             b = next;
//         }, 1000); // Output a Fibonacci number every 1000ms (1 second)
//     }
    
//  //   printFibonacci(); // Start printing Fibonacci numbers

    //5 
    //it is failing because we need to use call in order for the object to retain the same context I think

    let car = {
        make: "Porsche",
        model: '911',
        year: 1964,
        description() {
        
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
        }
        };
        car.description(); //works
      

        setTimeout(car.description.bind(car), 200);
//b
        let carClone = Object.assign({}, car); // Create a shallow copy of the car object
carClone.year = 2024; // Change the year for the clone

carClone.description(); // This will print the new year 2024

//c 
//The delayed description() call will still use the original values because setTimeout(car.description, 200) creates a reference to the car.description method as it existed at the time of the call. 
//It doesn’t get the updated values from the cloned object (newCar), because the method is still bound to the original object (car).

//e
let anotherCar = { ...car, make: 'Clown Car' }; // Clone and override the make property
anotherCar.description(); // Output: This car is a Clown Car 911 from 1964

// Test the bound description method
setTimeout(car.description.bind(car), 200); // Output: This car is a Porsche 911 from 1964

//6
//a
Function.prototype.delay = function(ms) {
    let func = this; // Save the reference to the original function
    return function(...args) { // Return a new function that takes parameters
      setTimeout(() => func.apply(this, args), ms); // Delay execution with setTimeout
    };
};


function multiply(a, b, c, d) {
    console.log( a * b * c * d);
    }
    multiply.delay(1000)(2, 3, 4, 5); // Prints 120 after 1 second

    //7
    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
      }
      
    
      Person.prototype.toString = function() {
        return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
      };

      const person1 = new Person('James Brown', 73, 'male')
      const person2 = new Person('Edward Elric', 1, 'male')
console.log('person1: '+person1) //prints person1: [object Object]
console.log('person2: '+person2) //prints person1: [object Object]

function Student(name, age, gender, cohort) {
    Person.call(this, name, age, gender); // Inherit properties from Person
    this.cohort = cohort; // New property for Student
  }
  
  // Inherit Person's prototype
  //When we create a new constructor function like Student, which extends Person, we want the Student objects to inherit all the methods that Person has (such as toString). 
  //This is done by linking Student.prototype to Person.prototype. By doing this, any instance of Student will also be able to use the methods defined on Person.prototype
  Student.prototype = Object.create(Person.prototype);
  Student.prototype.constructor = Student;

  Student.prototype.toString = function() {
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Cohort: ${this.cohort}`;
  };
  

  const student1 = new Student('Alphonse Elric', 2, 'male', '2024');
  const student2 = new Student('Max Buhmann', 29, 'male', '2024');
  
  console.log('student1: ' + student1); 
  console.log('student2: ' + student2);

  //8

  class DigitalClock {
    constructor(prefix) {
    this.prefix = prefix;
    }
    display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [date.getHours(), date.getMinutes(),
    date.getSeconds()];
    if (hours < 10) hours = '0' + hours;
    if (mins < 10) mins = '0' + mins;
    if (secs < 10) secs = '0' + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }
    stop() {
    clearInterval(this.timer);
    }
    start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
    }
    }
    const myClock = new DigitalClock('my clock:')
    myClock.start()

    //a 

    class PrecisionClock extends DigitalClock { 
        constructor(prefix, precision = 1000) { // The PrecisionClock constructor calls super(prefix) to inherit the prefix behavior from DigitalClock. Then it assigns the precision value.
          super(prefix); // Call the parent constructor to initialize 'prefix'
          this.precision = precision; // Set the precision for interval timing
        }
      
        start() {
          this.display(); // Display the current time immediately
          this.timer = setInterval(() => this.display(), this.precision); // Use precision for interval timing
        }
      }
      
      const preciseClock = new PrecisionClock('Precision clock:', 500); // Ticks every 500ms
      preciseClock.start();

      //b

      class AlarmClock extends DigitalClock {
        constructor (prefix, wakeupTime = '07:00'){
            super(prefix); // Inherit the prefix from DigitalClock
            this.wakeupTime = wakeupTime; // Set the wakeup time (default to '07:00')
          }
          display() {
            let date = new Date();
            let [hours, mins] = [date.getHours(), date.getMinutes()];
        
            // Format hours and mins to ensure two digits
            if (hours < 10) hours = '0' + hours;
            if (mins < 10) mins = '0' + mins;
        
            const currentTime = `${hours}:${mins}`;
        
            // Check if the current time matches the wakeup time
            if (currentTime === this.wakeupTime) {
              console.log('Wake Up');
              this.stop(); // Stop the clock when the wakeup time is reached
            } else {
              console.log(`${this.prefix} ${currentTime}`);
            }
          }
        }

        const alarmClock = new AlarmClock('Alarm clock:', '07:30'); // Set custom wakeup time to 07:30
        alarmClock.start();
      
        //10

        //run 'npm init' and accept all the defaults
//run 'npm install node-fetch'
//add this line to package.json after line 5: "type": "module",
import fetch from 'node-fetch';

globalThis.fetch = fetch; // For node.js environment

async function fetchURLData(url) {
  try {
    const response = await fetch(url); // Wait for the fetch request
    if (response.status === 200) {
      const data = await response.json(); // Wait for the response to be parsed as JSON
      return data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    throw new Error(error.message); // Catch any errors that occur during the fetch process
  }
}

// Test the function with a valid URL
fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
  .then(data => console.log(data))
  .catch(error => console.error(error.message));

// Test the function with an invalid URL
fetchURLData('https://invalid-url.com')
  .then(data => console.log(data))
  .catch(error => console.error(error.message));