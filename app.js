function encode1(num, codingString) 
{
    //codingString - any string with not repeated symbols
    let res = "";
    if(checkDuplicate(codingString) == true)
    {
        console.log("Error: duplicate symbols in coding string")
        return;
    }
    else
    {
        do
        {
            const digit = Math.trunc(num % (codingString.length));
            const symb = getSymbol(digit,codingString);
            res = symb + res;
            num = Math.trunc(num / (codingString.length));
        }
        while(num >= 1);
        return res;
    }   
}
function getSymbol(digit, codingString)
{
    let char = codingString[digit];
    return char;
}
function checkDuplicate(codingString)
{
    return new Set(codingString).size != codingString.length;
}
console.log(encode1(355,'123'));