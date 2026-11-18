// function
function add (){
    let num1 = 100;
    let num2 =40;
    console.log("add",num1 + num2);
}
add();
// function with parameter
function addition (a,b){
    console.log("Addition with parameter",a+b);
    
}
addition(30,40);
//function expression
let sub = function(c ,d ){
   console.log("subtraction ",c- d);
}
sub(40,20);

//Arrow Function
let multiply =(e, f)=>{
    console.log("Multiplication",e*f)
}
multiply(9,9);
//Methood Overloading is not possible in javascript when we try to declare with two different function
//  with same function name and different parameters it will take the last function in the count 
