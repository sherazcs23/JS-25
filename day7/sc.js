// call back fucntion is used when we return a function as argument in other function
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action

// function sayhello(Named) {
//     console.log(`Hello ${Named}`);

//     function greetsay() {
//         console.log("this is callback function");
//     }

//     greetsay();  // Call internal function directly
// }

// sayhello("sheraz");



// function greetsay() {
//     console.log("this is callback function");
// }

// function sayhello(Named, callback) {
//     console.log(`Hello ${Named}`);
//     callback();  // This will now correctly call greetsay
// }

// sayhello("sheraz", greetsay);





// function sayhello(Named, callback) {
//     console.log(`Hello ${Named}`);
//     callback(); // Call the callback
// }

// function greet() {
//     console.log("this is callback function");
// }

// // Now pass greet as a callback to sayhello
// sayhello("sheraz", greet);


//

// function hello(name) {
//     console.log(`Hello ${name}`);
// }

// // Outer function that just prints something and calls the inner (callback) function
// function greet_2(callback) {
//     console.log("this is callback function");
//     callback("Sheraz"); // calling callback with an argument

// }

// // // Now call greet_2 and pass hello as callback
// greet_2(hello("Test"));





// function hello() {

//     let name = "sheraz";
//     function greet() {
//         console.log(`hello ${name}`)
//     }
//     greet();
// } hello();

// closur in which fucntion scope is return
// function hello() {
//     Name = "sheraz";
//     function hi() {
//         console.log("hello " + Name);
//     }
//     return hi;
// }
// // hello()(); // immediately invoking the returned function
// hello()();



// // closure example
// function hello() {
//     const Name = "sheraz";
//     function hi() {
//         console.log("hello " + Name);
//     }
//     return hi;
// }

// let hella = hello();     // hella now holds reference to the `hi` function
// console.log(hella);      // Will log: ƒ hi() { console.log("hello " + Name); }
// hella();                 // This will invoke the `hi` function and output: hello sheraz





