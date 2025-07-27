// lexical scope starts here according to  this that the child can access the variable of parent but areant cannot acces that of child and siblings are not also to not accessible..
// parent and child share the same memory


// function parent( ){

//   let a = "sheraz";
//    function child(){
// console.log(a);
//    }
//    child();
//    function child2(){
//     let c = "haroon";
//     console.log(a,c);
//    }
//    child2();

// }
// parent();


// closure  
function myname () {
   let name ="sheraz";
     function getname () {
        console.log(name);
     }
   return getname;

}
// Call immediately
myname()(); //myname()();


// Store in variable and then call
// let my_name = myname();
// my_name();








