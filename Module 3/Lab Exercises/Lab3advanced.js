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

    //4

    function printFibonacci() {
        let a = 0, b = 1; // Starting values for the Fibonacci sequence
    
        setInterval(function() {
            console.log(b);
            let next = a + b;
            a = b;
            b = next;
        }, 1000); // Output a Fibonacci number every 1000ms (1 second)
    }
    
    printFibonacci(); // Start printing Fibonacci numbers

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


function multiply(a, b) {
    console.log( a * b );
    }
    multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds