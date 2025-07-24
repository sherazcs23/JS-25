
// date 26 06 2024  started ths topic
// let nam2 = "sheraz";
// console.log(nam2);

// let age = 25;
// console.log(age);
// console.log(typeof age);

// let isGraduated = false;
// console.log(isGraduated);
// console.log(typeof isGraduated);

// let a;
// console.log(a);
// console.log(typeof a);

// let aba = null;
// console.log(aba);
// console.log(typeof aba);
// console.log(typeof null); // null is an object in JavaScript

/* const students = {
  name: "Sheraz Hussain",
  age  : 25,
  cgpa : 3.5,
  isGraduated : false,
  _title : "BS Comuter SCIENCE",
  _completion_year : 2026,
  $month : "August"
 }
console.log(students);
console.log(students["_title"]);
console.log(students.name)
students.name = students.name + " " + "Khalid";
console.log(students.name);
students.age = students.age + 1;
console.log(students.age);
console.log(typeof students["age"]);
console.log(typeof students["_title"]);
console.log(typeof students["cgpa"]);
console.log(typeof students.isGraduated);
students.cgpa = students.cgpa + 0.3;
console.log(students.cgpa);*/

//  26 june 2024 arithematic oprerators 

//   let a =7;
//   let b =2;
//  let c=a+b;
// console.log(c); //9


// let d=a-b;
// console.log(d); //5


// let e=a+b;
// console.log(e); //9


// let f=a**b;
// console.log(f); //49

// //division
// let g=a/b;
// console.log(g); //3.5

// //modulus
// let h=a%b;
// console.log(h);  //1


//   // unaray operator incement and decrement 
//   let i =7;
//   i++;
//   console.log(i);
//   // console.log(i+1);

//   let z = 10;
//  z--;
//    console.log(z);
// // console.log(z-1);

//pre increment and post increment
//pre incremeent first change then output
// let j =5;
// console.log(++j); //6 

//  // post increment next line mein add kary ga
//   let k = 4;
//   console.log(k++); //4
//   console.log(k);//5


//   //pre decrement
//   let i = 7;
//   console.log(--i); //6

//   //post decremnt 

//   let y = 10;
//   console.log(y--);//10
//   console.log(y); //9

/*Assignemnt operators*/
// let a = 4;
// let  b = 6;
//  a **= 2;
//  console.log("a =",a);
// console.log( "a*b =", a*b);
// a /= 2;
// console.log("a =",a);
// b %= 3;
// console.log("b =",b);

// console.log(a+=2);
// console.log(b-=4);



// comparsion operators;
// returns boolena value
// equal to 

//  let a = 5;
//  let b = 5;
//  console.log(a == b); //true


// let c = "5";
//  let d = 5;
//  console.log(c==d);//true

// not equal to;

//  let a = 4;
//  let b = 6;
//  console.log(a != b);


// eqault to and type;
//  strcitly check value an type of data stored

//  let c = "5";
//  let d = 5;
//  console.log(c===d); //false

//  let i = 5;
//  let j = 5;
//  console.log(i===j); // true 

//  let c = 8;
//  let d = 3;
//   console.log(c!==d);

//  logical operators 

// logica And opeartor &&
//   let a = 7;
//   let b = 6;
//   let c = a > b;
//   let d = a != b;;
//   console.log(c && d); //true

// // logical or operator ||
//   let e = 7;
//   let f = 6;
//   let h = e > f;
//   let g = e == f;
//   console.log(e > f || e == f); //true

//logical not ! operator;

// let age = 25;
// let Agenextyear = 26;
// console.log(!(age == Agenextyear)); // true

//   conditional statements
//   if statement

//    let age = 15;
//    if (age >=18) {
//     console.log("you are eligible to give vote ");
//    }
//    if(age < 18) {
//     console.log("you are below the age to give vote as decided by the Govt of pakistan");
//    } 

//      let Age = 20;
//     let mode = "dark";
//     let color;
//     if (mode === "dark"){
//      color = " black"; 
//     }   
//     if (mode === "light"){
//      color = " white";
//     }   
//     if (mode === "black"){
//      color = "blue" ;
//     }   
//     console.log(color);

//     // if else *****

//     let marks = 70;
//     if (marks >= 40) {
//       console.log("you are pass");
//     }
//     else {
//       console.log("you are fais and below the average ");
//     }


//     let  Number = 10;
//     if (Number%2 ===0){
//       console.log("Number is even");
//     }
//     else{
//       console.log("number is odd ");
//     } 

//  // ifelse statement

//  let marks = 15;
//  if (marks == 85) {
//   console.log("you got A+ grade");
//  }
// else if (marks > 70)
// {
//   console.log("you got B graede");
// }
// else if (marks >= 45) {
//   console.log("you got  passing marks");
//  }
// else if (marks == 25)
// {
//   console.log("better luck next time, you are failed");
// }
// else { console.log("you are failed");

//    }


// instanceof operator
// const fruits = ["apple", "banana"];
// const user = { name: "Ali" };

// console.log(fruits instanceof Array);  // true ✅
// console.log(user instanceof Object);   // true ✅



// // Non-primitive (object) types
// const nameObj = new String("Khalid");
// const ageObj = new Number(25);

// console.log(nameObj instanceof String); // true ✅
// console.log(ageObj instanceof Number);  // true ✅


// in operator
//  const person ={
//   name: AggregateError,
//   age:30,
//   cityt:"shorkot",
//   isstudent: true
//  }
// console.log("name" in person);
// console.log("country" in person); // false, because 'country' is not a property of the person object


// let arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(0 in arr); //true


// const colors = ["red", "green", "blue"];

// console.log(0 in colors); // true (index 0 exists)
// console.log(3 in colors); // false (no index 3)
// console.log("length" in colors); // true (property)

// property checks if avaibale then true otherwise false and also with the index case 

// const Person = { name : "Ali",
//    age : 25
//  };
// console.log("age" in Person); // true ✅
// console.log("toString" in Person);//true


// let profile = {

//   name: "Sheraz",
//   age: 25,
//   isGraduated: false
// }
// console.log("name" in profile); // true
// console.log("toString" in profile); // true

// let arr =[1,2,3,4,5,6,7,8,];
// // console.log(2 in arr);
// // delete arr[7];       // deletes the element at index 7
// console.log(arr); 


// spread operator
//  const obj = {
//         name2: "sheraz",
//         age: 25 
//        }

//        const oobj3 ={

//         ...obj,
//        }
//        console.log(oobj3);

//        const {name2, age} = obj;
//        console.log(name2);
//        console.log(age);


//       const obj = {
//       nme: " sher",
//       ge: 25,
//       isGraduated: false,
//       _title: "BS Computer Science",


//       }  
//       console.log({...obj,nme:"sher234"});  // this will change
//  console.log({    nme:"sher234",...obj});  // remin same



// return statement 

// function add(a,b) {
//   return a+b;
//    }
//     console.log(add(9,7));
//     function multiply(x,y){
//       return x*y;
//     }
//     let reslut = multiply(8,9);
//     console.log(reslut);


//     /// switch statemnt 
//     // it used to perform different opearion absed on the value of conditiion. it is used as alternative  to if..else if statements

//     let day = 2;
//     switch(day) {
//       case 1:
//         console.log("today is Monday");
//         break;
//        case 2:
//         console.log("today is saturday");
//         break;
//       case 3:
//         console.log("today is tuesday");
//         break;
//       case 4:
//         console.log("today is wednesday");
//         break;
//       case 5:
//         console.log("today is thursday");
//         break;
//       default:
//         console.log("today is not a valid day");
//     }

//    let mrks = 75;
//    switch(mrks) {

//     case 60:
//        console.log("you have got  A  grade");
//     case 50:
//        console.log("you have got  B  grade");
//   case 75:
//        console.log("you have got  c  grade");
//      break;
//    default:
//       console.log("you are fail");
//    }

// for github next
// let arr = [1,2,3,4,5,6,7,8,9];
//     console.log(delete arr[5]);
//     console.log(arr);

//   let arr = [1,2,3,45,5,6];
//    console.log(3 in arr);

// let arr1 = ["faisal", "sheraz", "khalid", "ali"];
//     console.log([1] in arr1);

//  const students = {
// name: "Sheraz Hussain",
// age: 25,
// cgpa: 3.5,
// isGraduated: false,
// _title: "BS Computer SCIENCE",
// _completion_year: 2026,
// $month: "August"

//   }
//   console.log("name" in students);
//   console.log("age" in students);


// date 27 06 2025
// / for loop



//  for( let a=1; a<=10;a++){
//   console.log("3 *", a,"=", 3*a);
//  } 


// for (let i = 0; i < 10; i++) {
//     console.log("Hello World");
//   }



// let multiply = 5;
// for(let i=1; i<6; i++) {
//     multiply = multiply *i;
// }
//  console.log(" multiply =", multiply);
//  console.log("loop has ended"); 


// infinite loop that never ends;


//  for (let i = 0; i < 10; i--) {
//     console.log("Hello World");

//  while loop
//  let i = 1;
//  while (i <= 10) {
//   console.log("Hello World");
//   i++;
//  } 


// do while loop //
// let f = 0;
//  do {
// console.log(f);
// f++;

//  } while(f < 20);


// for-of loop  used in arrays and strings
//  let srt = "lahore is city of colleges";
//  let  size = 0;
//  for (let vl of  srt)  {

//    console.log("value is =", vl);
//   size++;
//  }

//  console.log("size of string is =", size);
//  console.log(srt.length); // length


//  let  arr =[1,6,2,3,4,5,6,7,7,8,66,45634,5,45,4,];
//    let size = 0;
//    console.log(arr);
//  for(let val of arr) {
//   console.log("value is =",val)
//   size++;
//  }
// console.log(size);
// console.log(arr.length);
// console.log(arr[0]);



// for-in loop is used in objects and array
//  let size = 0;
//  let obj = {
//    name: "Sheraz Hussain",       
//    age: 25,
//    cgpa: 3.5,
//   isGraduated: false,
//    _title: "BS Computer SCIENCE",  
//  }
//  for(let key in obj) {
//   console.log("key =", key);
//   size++;
//    console.log("value =", obj[key]);
//  }
//  console.log(size);

// practice question

//  for(let i=0; i<=100;i++){
//  if(i%2===0){
//   //even nmbers prints
//  console.log("even number =",i)  
//  }
//  // odd nmber prints
//  else {
//   console.log("odd number=",i); 
//  }
//  }


// 2nd question  

//  let usernum = prompt("enter number");
//   let gamenum = 25;

//   if(usernum == gamenum) {
//     console.log("you have won the geme number");

//   }
//     else if(usernum != gamenum) {
//    console.log("you have eneter wrong number");
//  }


// let num1 = prompt("enter a number");
// let Gamenu = 20;

// while (num1 != Gamenu) {
//   num1 = prompt("you guess wrong number");
// }
// console.log("you have enter Right Answer");



// let arr = [, 2, 3, 6, 8, 3, 4, 984];
// console.log(0 in arr);
// console.log(delete arr[5]);
// console.log(arr);
// console.log(6 in arr);

// let obj = {
//   class: "BS Computer Science",
//   section: "A",
//   year: 2024,

// }
// console.log("class" in obj);
// console.log("gender" in obj); 
 

//     template literals // strings literas 
// let str = `sheraz Hussain`;
// let str1 = `harron nawaz`;
// console.log(str + ' ' + str1 + " are learning front end development");
// console.log(`both studentsare learnign front end development ${str} and ${str1}`);
// console.log(str[0]);

//     date 28 06 2024   functions


// function defination 
//      function sheraz() {
//   console.log("Sheraz is in Lhaore");
// }
// sheraz();  // function call

// function sum(x, y) {
//   console.log(x + y);
// }
// sum(5, 8);



// function multilpy(x, y) {
//   z = x * y
//   console.log("multiply of x and y is =", z);
//   return z;
//   console.log("this will not run because return statement is used");
// }
// console.log(multilpy(5, 8));
// let u = multilpy(6, 7);
// console.log(u);


// let multiply = (x, y) => {
//   console.log(x * y);
// };
// multiply(98, 87);


// const sum = (a, b) => {
//   return a + b;
// }
// console.log(typeof sum);

// let printName = () => {
//   console.log("Sheraz Hussain");
// }
// printName();

// function simple 

//         function countvowels(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
//       count++;
//     }
//   }
//   console.log(count);
// }
// countvowels("SHERAZ");


// return in function simple
//         function countvowels(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countvowels("SHERAZ"));
   


//     arrow function counting vowels

// let count_vowels = (str1) => {
//   let count_1 = 0;
//   for (let i = 0; i < str1.length; i++) {
//     if (str1[i] == "a" || str1[i] == "e" || str1[i] == "i" || str1[i] == "o" || str1[i] == "u" ||
//       str1[i] == "A" || str1[i] == "E" || str1[i] == "I" || str1[i] == "O" || str1[i] == "u"
//     ) {
//       count_1++;
//     }

//   }
//   console.log(count_1);
// }
// count_vowels("I love city f Lahore BECAUSE OF DIVERSITY");


// using Return in arrow function Staement

//       let count_vowels = (str1) => {
//   let count_1 = 0;
//   for (let i = 0; i < str1.length; i++) {
//     if (str1[i] == "a" || str1[i] == "e" || str1[i] == "i" || str1[i] == "o" || str1[i] == "u" ||
//       str1[i] == "A" || str1[i] == "E" || str1[i] == "I" || str1[i] == "O" || str1[i] == "u"
//     ) {
//       count_1++;
//     }

//   }
//   return count_1;
// }
// console.log(count_vowels("I love city f Lahore BECAUSE OF DIVERSITY"));



// const jsuser = {
//   name: "sheraz",
//   age: 25,
//   isgraduated: false,
//   _title: "bs computer Science"

// }

// console.log(jsuser);
// console.log(jsuser["name"]);



//      date   09 07 2024
//         object methods built in for ease of 
//       const obj = {
//     nme: "sherd",
//     ge: 25,
//     compny: "devsinc"
//   }
// // print only keys
// console.log(Object.keys(obj));
// //print vlues only
// console.log(Object.values(obj));
// // key pair vlues in arry
// console.log(Object.entries(obj));
// // for copy  elemnt 
// const obj2 = Object.assign(obj);
// console.log(obj2);
// /// freeze ky liye
// const obj3 = Object.freeze(obj);
// obj.nme = "hroon";
// console.log(obj3);

// const newo_ = Object.create(obj);
// newo_.nme = "hera";
// console.log(newo_);













