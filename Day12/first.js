// promise is object
// promsie kay liye value pass karni hota hai

// let firstpromise = new Promise((resolve, reject) => {

//     console.log("babbar");
//     // if solve promise
//     // resolve(1001);
//     // // // if reject then retrun some value
//     reject(new Error("internal server error"));
// });


// let firstpromise = new Promise((resolve, reject) => {
//     setTimeout(function myName() {
//         console.log("sheraz is here");
//     }, 5000);
//     // resolve(1);
//     // reject(new Error("not working"));
// });



// let promise1 = new Promise((resolve, reject) => {
//     let success = false;
//     if (success) {
//         resolve("promise fulfilled");
//     }
//     else {
//         reject("promise rejected ");
//     }
// });
// promise1.then((message) => {
//     console.log("your promised is fulfilled : " + message);
// }).catch((error) => {
//     console.log("error is : " + error);
// })


// // chaining promises  exmaple1  chaning promises below example
// let promise1 = new Promise((resolve, reject) => {
//     let num2 = 20;
//     if (num2 == 30) {
//         resolve("fulfieed");
//     }
//     else {
//         reject("not fulfilled");
//     }
// })
// promise1.then((message) => {
//     console.log("first message " + message);
//     return "promise fulfilled second message";
// })
//     .then((message) => {
//         console.log("second message " + message);
//         return "promise fulfilled third message";
//     })
//     .then((message) => {
//         console.log("third message " + message);
//     })
//     .catch((error) => {
//         console.log(new Error("invalid this " + error));
//     })
//     .finally(() => {
//         console.log(" i will run");
//     })

// example 2 same above only in which number are passed to understand


// let promise1 = new Promise((resolve, reject) => {
//     let success = false;
//     if (success) {
//         resolve(10);
//     }
//     else {
//         reject(-1);
//     }
// });
// promise1.then((message) => {
//     console.log("first message is " + message);
//     return 20;
// })
//     // here in below message = 20 above return valu in then
//     .then((message) => {
//         console.log("second message is " + message);
//         return 30;
//     })
//     .then((message) => {
//         console.log(`third message is  ${message}`);
//     })
//     .catch(function (error) {
//         console.log(new Error(`invalid beacuse i dont know ${error}`));
//     })
//     .finally(() => {
//         console.log("i am finaly block i will always print beacsue i am finaly block");
//     })



// let bilal = function (FirstName) {
//     return FirstName;
// }
// console.log(bilal("sheraz"));

// let ahad = function (Name) {
//     console.log(`this is new ${Name}`);
// }
// ahad("haroon");



// for erro same but use    catch()

// finally() block also run whether it is run or not permenent it will run

// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, "First");
// })

// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 5000, "Second");
// })

// let promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, "Third");
// })
// Promise.all([promise1, promise2, promise3])
//     .then((values) => {
//         console.log("values => ", values);
//     })
//     .catch((error) => {
//         console.log("error")
//     });




// try {
//     let x = 20;
//     console.log(x);

// }
// catch {
//     console.log("error unknown");
// }
// finally {
//     console.log("i will print always");

// }



// try {
//     console.log(x);
// }
// catch {
//     console.log(new Error("invalid error"));
// }