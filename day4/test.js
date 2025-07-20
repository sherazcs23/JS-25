 //conditional statements
  //if statement

   let age = 15;
   if (age >=18) {
    console.log("you are eligible to give vote ");
   }
   if(age < 18) {
    console.log("you are below the age to give vote as decided by the Govt of pakistan");
   } 

     let Age = 20;
    let mode = "dark";
    let color;
    if (mode === "dark"){
     color = " black"; 
    }   
    if (mode === "light"){
     color = " white";
    }   
    if (mode === "black"){
     color = "blue" ;
    }   
    console.log(color);

    // if else *****

    let marks = 70;
    if (marks >= 40) {
      console.log("you are pass");
    }
    else {
      console.log("you are fais and below the average ");
    }

     
    let  Number = 10;
    if (Number%2 ===0){
      console.log("Number is even");
    }
    else{
      console.log("number is odd ");
    } 

 // ifelse statement

 let marks = 15;
 if (marks == 85) {
  console.log("you got A+ grade");
 }
else if (marks > 70)
{
  console.log("you got B graede");
}
else if (marks >= 45) {
  console.log("you got  passing marks");
 }
else if (marks == 25)
{
  console.log("better luck next time, you are failed");
}
else { console.log("you are failed");

   }
  

instanceof operator
const fruits = ["apple", "banana"];
const user = { name: "Ali" };

console.log(fruits instanceof Array);  // true ✅
console.log(user instanceof Object);   // true ✅



// Non-primitive (object) types
const nameObj = new String("Khalid");
const ageObj = new Number(25);

console.log(nameObj instanceof String); // true ✅
console.log(ageObj instanceof Number);  // true ✅


in operator
 const person ={
  name: AggregateError,
  age:30,
  cityt:"shorkot",
  isstudent: true
 }
console.log("name" in person);
console.log("country" in person); // false, because 'country' is not a property of the person object


let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(0 in arr); //true


const colors = ["red", "green", "blue"];

console.log(0 in colors); // true (index 0 exists)
console.log(3 in colors); // false (no index 3)
console.log("length" in colors); // true (property)

property checks if avaibale then true otherwise false and also with the index case 

const Person = { name : "Ali",
   age : 25
 };
console.log("age" in Person); // true ✅
console.log("toString" in Person);//true


let profile = {

  name: "Sheraz",
  age: 25,
  isGraduated: false
}
console.log("name" in profile); // true
console.log("toString" in profile); // true

let arr =[1,2,3,4,5,6,7,8,];
// console.log(2 in arr);
// delete arr[7];       // deletes the element at index 7
console.log(arr); 


spread operator
 const obj = {
        name2: "sheraz",
        age: 25 
       }

       const oobj3 ={
        
        ...obj,
       }
       console.log(oobj3);

       const {name2, age} = obj;
       console.log(name2);
       console.log(age);


      const obj = {
      nme: " sher",
      ge: 25,
      isGraduated: false,
      _title: "BS Computer Science",


      }  
      console.log({...obj,nme:"sher234"});  // this will change
 console.log({    nme:"sher234",...obj});  // remin same
    


  //return statement 

function add(a,b) {
  return a+b;
   }
    console.log(add(9,7));
    function multiply(x,y){
      return x*y;
    }
    let reslut = multiply(8,9);
    console.log(reslut);


    /// switch statemnt 
    // it used to perform different opearion absed on the value of condition. it is used as alternative  to if..else if statements
    
    let day = 2;
    switch(day) {
      case 1:
        console.log("today is Monday");
        break;
       case 2:
        console.log("today is saturday");
        break;
      case 3:
        console.log("today is tuesday");
        break;
      case 4:
        console.log("today is wednesday");
        break;
      case 5:
        console.log("today is thursday");
        break;
      default:
        console.log("today is not a valid day");
    }

   let marks = 75;
   switch(marks) {
    case 60:
       console.log("you have got  A  grade");
    case 50:
       console.log("you have got  B  grade");
  case 75:
       console.log("you have got  c  grade");
     break;
   default:
      console.log("you are fail");
   }
