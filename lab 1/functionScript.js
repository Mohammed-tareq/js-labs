// a- try to console.log the values of value1,value2,value3 on
// consumingScript.js file ??
// local variables are not accessible outside function’s block.


//
// function printVariable (val1,val2,val3){
//     return  [val1,val2,val3];
// }

// ==========================================================================================


// Try to call the function before definition line?

// console.log(printVariable("mo","me","wel"));
//
// function printVariable (val1,val2,val3){
//     return  [val1,val2,val3];
// }

// ==============================================================================


// Call the function with 3 values then print the return
//
//  function printVariable (val1,val2,val3){
//      return  [val1,val2,val3];
//  }
//
//  let result = printVariable("hello world","hello world","hello world");
// console.log(result);


// =======================================================================================
//
// Try to call the function with less than 3 parameters
// printVariables(3,5)


// function printVariable (val1,val2,val3= null){
//     return  [val1,val2,val3];
// }
//
// console.log(printVariable(2,5));


//  function printVariable (val1,val2,val3){
//     if(val3 === undefined)
//         return [val1,val2]
//      else
//      return  [val1,val2,val3];
//  }
// console.log(printVariable(2,5));


//=================================================================================================================

//
// What if you call the function with too many parameters ?
//     (more than 3)
// Can you print them using (arguments)?
//
// function printVariable (val1,val2,val3){
//     return  arguments;
// }
//
// console.log(printVariable(2,5,6,7,8));
// =================================================================================================================


//
// f- Define var localVar=3; testingVar=5; inside the function’s
// block Before calling the function try to console.log the values
// localVar and testingVar.?

// In step f , call the function and try to print localVar and
// testingVar?
//
// function myFunction() {
//     var localVar = 3;
//     var testVar =5;

// console.log(localVar , testVar);
// }
// console.log(localVar);
// console.log(testVar);
// myFunction();

// =============================================================================================================

// 2- Repeat step 1 but define the function as function expression
//  let myFunction =  () => {
//     var localVar = 3 ;
//     var tsetVar = 4;
//     console.log(tsetVar ,  localVar);
//  }


//  ==========================================================================================================

// 4- Functions accept 2 variables and return the summation result
// Testing:
//     a- What if you insert less than 2 inputs?
//     solve this problem using ES6 feature.
//     b- What if the input is not a Number?
//     Solve this problem using your logic


// let sumNum = (x = 0 , y = 0 ) => {
//
//
//     x = prompt("please enter the first number");
//     y = prompt("please enter the second number");
//
//     x= Number(x);
//     y = Number(y)
//    if ( isNaN(x)|| isNaN(y))
//
//        alert("pleace enter only number");
//    else
//
//    return x + y;
// }


let sum = () => {
    let x, y;
    do {

        x = prompt("frist num");
        y = prompt("scound num");

        x = Number(x);
        y = Number(y);
        if (isNaN(x) || isNaN(y))

            alert("please enter a valid number");

        else
            return x + y;
    }
    while (isNaN(x) || isNaN(y));
}


console.log(sum());











