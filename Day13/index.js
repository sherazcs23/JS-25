// function message (){

//    let a = 5;
//    let b= 8;
//    return a+b;
// }
// console.log(message()) ;


// function message2 () {

// console.log("Hello, World!");

// }  message2();

// set timeout

// let id = setTimeout(() => {
//     console.log("Delayed for 2 second.");
// }, 2000);
// clearTimeout(id);//


//Working with asynchronous functions
//setTimeout() is an asynchronous function, meaning that
// the timer function will not pause execution of
// other functions in the functions stack. In other words, you cannot use setTimeout() to create a
//  "pause" before the next function in the function stack fires.

// setTimeout(() => {
//   console.log("this is the first message");
// }, 5000);
// setTimeout(() => {
//   console.log("this is the second message");
// }, 3000);
// setTimeout(() => {
//   console.log("this is the third message");
// }, 1000);

// cleartimeout will cancel before it executes

// arrow function

let result_2 = setTimeout(() => {
    console.log("This is a delayed message after 4 seconds.");
}, 4000);
clearTimeout(result_2);
console.log("hi", result_2);


// anonymou function settimeout;


// let resultparent =setTimeout(function() {
//    console.log("this is annonymous function set timout is 4 second");
// },4000);

// clearTimeout(resultparent);
// console.log(resultparent);



//  setInterval

// anonymous function setInterval
// let timeoutid= setInterval(function () {
//     console.log("this is sheraz you ar epracting javscript ");
// },2000);  // this mean that it willl execute after every 2second it will run infinitly
//  clearInterval(timeoutid);   // this is ued to stopthe interval

// arrow function setInterval
//  let timeoutid= setInterval(() =>  {
//     console.log("this is sheraz you ar epracting javscript ");
// },2000);  // this mean that it willl execute after every 2second it will run infinitly
//  clearInterval(timeoutid);

// simple fucntion setInterval
// let timeoutid = setInterval(function abbas() {
//     console.log("this is sheraz you ar epracting javscript ");
// }, 2000);  // this mean that it willl execute after every 2second it will run infinitly
// clearInterval(timeoutid);
//console.log(timeoutid);


// for stping interval we have to use clearInterval() method and in which we have to give id not reference  of function or other else
// alert("Hello, this is Sheraz Khan. I am learning JavaScript.");
// function myname () {
//     console.log("Hello, this is Sheraz Khan. I am learning JavaScript.");
// }
// let id = setInterval(myname,2000);
// console.log(id); // This will log the interval ID, which can be used to clear the interval later.
// clearInterval(id);



console.log(
    "Helllooooo"
);


