
      let num1 = prompt("enter a number");
      let Gamenu = 20;

      while(num1 != Gamenu) {
        num1 = prompt("you guess wrong number");
      }
     console.log("you have enter Right Answer");



  let arr = [,2,3,6,8,3,4,984];
     console.log (0 in arr);
     console.log(delete arr[5]);
     console.log(arr);
     console.log(6 in arr);

     let obj = {
       class: "BS Computer Science",
       section: "A",
        year: 2024,

     }
     console.log("class" in obj);
     console.log("gender" in obj); 
 

    template literals // strings literas 
     let str = `sheraz Hussain`;
     let str1 =`harron nawaz`;
      console.log(str + ' ' + str1 +" are learning front end development");
      console.log(`both studentsare learnign front end development ${str} and ${str1}`);
      console.log(str[0]);

    date 28 06 2024   functions


    function defination 
     function sheraz()  {
      console.log("Sheraz is in Lhaore");
    }
    sheraz();  // function call

    function sum(x,y) {
      console.log(x+y);
    }
   sum(5,8);



  function multilpy(x,y) {
        z = x*y
        console.log("multiply of x and y is =", z);
       return z;
       console.log("this will not run because return statement is used");
     }
       console.log(multilpy(5,8));
     let u = multilpy(6,7);
     console.log(u);


     let  multiply = (x,y) => {
     console.log(x * y);
     };
      multiply(98,87);
     

     const sum =(a,b) => {
      return a+b;
     }
     console.log(typeof sum);

     let printName =() => {
      console.log("Sheraz Hussain"); 
     }  
       printName();

       function  simple 

        function countvowels(str) { 
      let count = 0;
       for(let i =0; i < str.length; i++) {
         if(str[i] == "a" || str[i] == "e" ||str[i] == "i" || str[i] == "o"  || str[i] == "u" ) { 
          count++;
        }
      }
      console.log(count);
      }
     countvowels("SHERAZ");


     return in function simple
        function countvowels(str) { 
      let count = 0;
       for(let i =0; i < str.length; i++) {
         if(str[i] == "a" || str[i] == "e" ||str[i] == "i" || str[i] == "o"  || str[i] == "u"  )
         {
          count++;
        }
      }
      return count;
      }
     console.log(countvowels("SHERAZ"));
   


    arrow function counting vowels 

     let count_vowels = (str1) => {
       let count_1 = 0;
       for (let i =0; i < str1.length; i++) {
       if (str1[i] == "a" || str1[i] =="e" || str1[i] == "i" || str1[i] == "o" || str1[i] == "u" || 
        str1[i] == "A" || str1[i] == "E"  || str1[i] == "I" || str1[i] == "O" || str1[i] == "u" 
      )
      {
        count_1++;
       }
        
       }
       console.log(count_1);
      }
      count_vowels("I love city f Lahore BECAUSE OF DIVERSITY");


      using Return in arrow function Staement

      let count_vowels = (str1) => {
       let count_1 = 0;
       for (let i =0; i < str1.length; i++) {
       if (str1[i] == "a" || str1[i] =="e" || str1[i] == "i" || str1[i] == "o" || str1[i] == "u" || 
        str1[i] == "A" || str1[i] == "E"  || str1[i] == "I" || str1[i] == "O" || str1[i] == "u" 
      )
      {
        count_1++;
       }
        
       }
       return count_1;
      }
         console.log(count_vowels("I love city f Lahore BECAUSE OF DIVERSITY"));



    const jsuser = {
     name: "sheraz",
     age: 25,
     isgraduated: false,
     _title:"bs computer Science"

    }

    console.log(jsuser);
    console.log(jsuser["name"]);



     date   09 07 2024
        object methods built in for ease of 
      const obj = {
    nme: "sherd",
    ge: 25,
    compny: "devsinc"   
}
// print only keys
console.log(Object.keys(obj));
//print vlues only
console.log(Object.values(obj));
// key pair vlues in arry
 console.log(Object.entries(obj));
 // for copy  elemnt 
 const obj2 = Object.assign(obj);
 console.log(obj2);
 /// freeze ky liye
 const obj3 = Object.freeze(obj);
 obj.nme ="hroon";
 console.log(obj3);
 
 const newo_=Object.create(obj);
 newo_.nme = "hera";
 console.log(newo_);
 
