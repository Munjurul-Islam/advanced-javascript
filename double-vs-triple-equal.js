 /**output is true, cz double equal just check the value */
let number1 = 2; 
let number2 = '2';                     
if(number1 == number2){
    console.log('this is true');
}
else{
    console.log('this is false');
}

/** 0 means false & 1 means true */
// let number1 = 1; 
// let number2 = true; 
let number1 = 0; 
let number2 = false;
if(number1 == number2){
    console.log('this is true');
}
else{
    console.log('this is false');
}


/**output is false, cz triple equal check the value & datatype */
let number1 = 2; 
let number2 = '2';                      
if(number1 === number2){
    console.log('this is true');
}
else{
    console.log('this is false');
}