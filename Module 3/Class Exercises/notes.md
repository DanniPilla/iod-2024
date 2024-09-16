** Important from Module 3 ** 

Default values,

Destructuring arrays, json.stringify will most likely be used, I need to investigate "closures" further, I need to investigate "error handling" 

Look into fetch more too. Fetch is the built in browser function to call to API

Asynchronous = is a non-blocking architecture, so the execution of one task isn't dependent on another. Tasks can run simultaneously. 

Synchronous = is a blocking architecture, so the execution of each operation depends on completing the one before it.

**Promises**
Promises are a way to handle asynchronous operations in JavaScript, allowing you to work with code that
will complete in the future. Promises can be in one of three states: pending, fulfilled, or rejected.

Key features of promises:
● Creation: A promise is created using the Promise constructor, which takes a function with resolve
and reject parameters, which themselves are functions.

● Then and Catch: .then() handles the result when a promise is fulfilled (resolved), and .catch()
handles errors when a promise is rejected.

● Async/Await: Keywords to handle promises in a cleaner, more intuitive way that resembles
synchronous code

● Error Handling: Errors are propagated down the chain, making it easy to manage failures.

● Parallel Execution: Multiple promises can run in parallel using Promise.all() or Promise.race().

promise // consume the promise by responding to outcomes when they happen
.finally( () => console.log('Wait is over, promise has settled.') ) // always prints
.then( (result) => console.log('Success! ' + result ) ) // prints resolve msg
.catch( (error) => console.log('Error! ' + error ) ) // prints reject msg

I should look into promise chainining

Most common is promise.all

**Error handling**

async function getData() {
  try {
    const response = await fetch("https://reqres.in/api/users"); // this line won't run until promise resolves
    // console.log("RES", response);

    if (!response.ok) {
      throw new Error(`HTTP error! ${response.status}`);
    }

    const json = await response.json(); // convert stream to JSON
    console.log("JSON", json.data);
  } catch (err) {
    console.log(`Failed: ${err}`);
  } finally {
    console.log("Finished!!");
  }
}

getData();

*async and await is prefered way to handle promise errors.*