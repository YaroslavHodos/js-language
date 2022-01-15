
//function encode(num, base) {
    //base from 2 to 10
//     let res =""; 
//     do {
//         const digit = Math.trunc(num % base);
//         const symb = getSymbol(digit);
//         res = symb + res;
//         num = Math.trunc(num / base);
//     } while(num >= 1);
//     return res;
// }
// function getSymbol(digit) {
    //base from 2 to 10
//    return "" + digit;// it will work only for base <= 10
}
// console.log(encode(10,2));
// write function

function encode1(num, codingString) 
{
    //codingString - any string with not repeated symbols
    let res = "";
    if(checkDuplicate(codingString) == true)
    {
        console.log("Error: duplicate symbols in coding string")
    }
    else
    {
        do
        {
            const digit = Math.trunc(num % (codingString.length-1));
            const symb = getSymbol(digit,codingString);
            res = symb + res;
            num = Math.trunc(num / (codingString.length-1));
        }
        while(num >= 1);
        return res;
    }   
}
function getSymbol(digit, codingString)
{
    let char = codingString[digit];
    return "" + char;
}
function checkDuplicate(codingString)
{
    return new Set(codingString).size != codingString.length;
}
console.log(encode1(25,'sewa'));