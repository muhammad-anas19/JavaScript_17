// Sync code inside Promise
let firstPromise = new Promise ( (resolve, reject) => {
    console.log("Anas");
    // resolve(1929);
    reject(new Error("Internal Server Error"));
});


// Async Code inside Promise
let secondPromise = new Promise ( (resolve, reject) => {
    function sayMyName() {
        console.log("Me 10sec peeche hun");
    }
    setTimeout(sayMyName, 10000);
    return 1;
});


// Then and Catch blocka
let promise1 = new Promise ( (resolve, reject) => {
    let success = false;
    if(success == true) {
        resolve("Promise Fulfilled");
    } else {
        reject("Promise Rejected")
    }
});
// Now if we want to use then block on promise we can do it like this:
promise1.then((message) => {
    console.log("Then ka message is " + message);
}).catch((error) => {
    console.log("ERROR: " + error);
})


// multiple then blocks
let promise2 = new Promise ( (resolve, reject) => {
    let flag = true;
    if(flag == true) {
        resolve("Promise Fulfilled");
    } else {
        reject("Promise Rejected")
    }
});
// Adding multiple then blocks
promise2.then( (message) => {
    console.log("First Message: " + message);
    return "Promise Fulfilled Second Message";
}).then( (message) => {
    console.log("Second Message: " + message);
    return "Promise Fulfilled Third Message";
}).then( (message) => {
    console.log("Third Message: " + message);
});


// Multiple Promises
let promiseOne = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "First");
})
let promiseTwo = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Second");
})
let promiseThree = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Third");
})
Promise.all([promiseOne, promiseTwo, promiseThree]).then((value) => {
    console.log(value);
})