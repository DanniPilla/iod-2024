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
function printMe() {
    console.log('printing debounced message')
    }
    printMe = debounce(printMe, 2000); //create this debounce function for a)


    //fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
    setTimeout( printMe, 100);
    setTimeout( printMe, 200);
    setTimeout( printMe, 300);