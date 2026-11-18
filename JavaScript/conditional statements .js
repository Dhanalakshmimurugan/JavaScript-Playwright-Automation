let age =5;
let is_havingpassport = true ;
let is_working = false;
let working_visa = is_havingpassport && is_working

if(working_visa && age>=20){
console.log("is eligibile for woring visa and the visa will be approved")
}else if(age <= 20 && working_visa ){
 console.log(" the person is not eligible ")
}
else {
    console.log("is not eligibile for working visa and it wont be approved");   
}

// tenary opeator 
const is_adult = age>20 ? "is adult" : "teen" ;
console.log(is_adult)

// switch statement

let browser = "chrome";
switch (browser){
    case "chrome" :  
     console.log("Chrome Browser is launched ");
    break; 
    case "firefox" :  
    console.log("firefox is launched ");
    break;
    default : 
    console.log("no browser is launched");
    break;
}

