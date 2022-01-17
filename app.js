function encode(num, codingString)
{
    let flRepeated = false;
    for (let i = 0; i < codingString.length; i++)
    {
        if (codingString.lastIndexOf(codingString[i]) != i)
        {
            console.log(`coding string has repeated symbol ${codingString[i]}`)
            flRepeated = true;
        }
    }
    if (!flRepeated)
    {
        let res = "";
        const base = codingString.length;
        do
        {
            const digit = Math.trunc(num % base);
            const digitSymb = codingString[digit];
            res = digitSymb + res;
            num = Math.trunc(num / base)
        }
        while(num != 0);
        return res;
    }
}
console.log(`encode(5, '.-') = ${encode(5, '.-')}`);