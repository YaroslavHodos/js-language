console.log("Hello World");
//Output for var 3 3 3 
// for(var i = 0; i < 3; i++){
//     setTimeout(function(){
//         console.log(i);
//     })
// }

// for(let i = 0; i < 3; i++){
//     setTimeout(function(){
//         console.log(i);
//     })
// }
const fun = function(a, b){
    return a + b;
}
let a = 5;
// console.log(a ** 2);
// console.log(fun(10,20));
//console.log(a(10,20)); //error
// console.log(fun ** 2); //NaN
console.log("12" + 12, '"12" + 12'); //JS defines operator + exist for strings, that's why number will be converted to string
console.log("12" - 12); //JS defines that operator - dosen't exist for strong that's why string "12" will be
console.log("ab"  - 12); //.....JS will try convert "ab" to number: as a result of this there will be value NaN
//sometimes there is a need to explicit conversion from the string to a number
//"+" unary is the simplest way for the explicit convesion of the string to the number
console.log('+"12" + 12 = ${+"12" + 12}')
//Hw #10 definition "a","s"
//using only two leters "a","s" print out word ananas case insensitive AnaNAS
//write fun calculate that can perform any arifmetic operation on two nambers
//write any exemple for running the following expresion fun(5)(10,3)
console.log('1. ', `a${+'a'}as`);
function calculate(op1, op2, compute) {
    return compute(op1,op2);
}
console.log('2. ',calculate(10,20, function(a,b) {
    return a + b;
}))
function fun(index) {
    if (index == 5) {
        return function(a, b){
            return a + b;
        } 
    }
    else {
        return function (a, b){
            return a - b;
        }
    }
}
console.log(fun(5)(10,3))