Important from Module 3

Default values,

Destructuring arrays

json.stringify will most likely be used

I need to investigate "closures" further

I need to investigate "error handling" 

Look into fetch more too. 

Asynchronous is a non-blocking architecture, so the execution of one task isn't dependent on another. Tasks can run simultaneously. 
Synchronous is a blocking architecture, so the execution of each operation depends on completing the one before it.

promise // consume the promise by responding to outcomes when they happen
.finally( () => console.log('Wait is over, promise has settled.') ) // always prints
.then( (result) => console.log('Success! ' + result ) ) // prints resolve msg
.catch( (error) => console.log('Error! ' + error ) ) // prints reject msg

I should look into promise chainining

Most common is promise.all

For error ha