// /// compile time error
// //syntax error
// //console.log(1;)

// // runtime error
// //reference error

// //console.log(x);

// try {
//     console.log("try block starts here");
//     below // refernec error
//     console.log(x);    // error kay bad wala code execute nahi ho ga
//     console.log("try block ends");

// }
// catch (h) {
//     /// retry logic
//     //fallback mechanism
//     // logging
//     // custom error
//     // koii bhi apni logic laga saktay hain
//     console.log(" i am inside catch block");
//     console.log("you error is here :", h);

// }

// finally {
//     console.log("i will run evey time because i am finally block");
// }


// let create a custom error
// try {
//     // Redference error
//     console.log(x);
// }
// catch (err) {
//     throw new Error("bro first to declare , then to print this");
// }

/// one more example how to throw error

// let errorcode = 100;
// if (errorcode == 100) {
//     throw new Error("invalid json");
// }



// function checkAge(age) {
//     if (age < 18) {
//         throw new Error("You must be 18+ to sign up!");
//     }
//     return "Welcome!";
// }

// try {
//     console.log(checkAge(28));
// } catch (err) {
//     console.error(err);
// }


// let promise1 = new Promise((resolve, reject) => {
//     let success = false;
//     if (success) {
//         resolve("Success!");

//     }
//     throw new Error("Something went wrong in the promise!");
// });

// promise1
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err));
