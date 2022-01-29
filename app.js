// input : ["lmn", "d", "d", "lmn", "a", "lmn", "a", "bc"]
/*
output : lmn -> 3
         a -> 2
         d -> 2
         bc -> 1
*/
function displayOccurences(array) {
    //creating object with key - unique of array (string as an element of array)
    //                value - occurences count
    //difference between obj.a and obj["a"]
    const res = {};
    for (let i = 0; i < array.length; i++) {
        if (res[array[i]] === undefined) {
            //string as content of array[i] occures first time
            res[array[i]] = 1;
        } 
        else {
            res[array[i]] = res[array[i]] + 1;
        }
    }
    //console.log(res); -> intermediate debug log
    Object.entries(res).sort((e1, e2) => {
        const res = e2[1] - e1[1];
        return res === 0 ? e1[0].localeCompare(e2[0]) : res;
    }).forEach(e => console.log(`${e[0]} -> ${e[1]}`));

}
const arString =  ["bc", "lmn", "d", "d", "lmn", "a", "lmn", "a"];
displayOccurences(arString);

/*HW #15
  1.
refactoring of function displayOccurences
lines 92 -99 should be a separated function
that separated function should apply methods like reduce
  2.
write useful function countBy(array, collbackFun) that returns object 
with keys as grouping criteria and values as the occurrence counts
keys should be sorted (optional)
where array - any array, collbackFun - function returning grouping criteria
examples:
1.
const arr = [6.4, 7.3, 6.5, 6.9];
const statistics = countBy(arr, element => Math.flour(element))
result: statistics -> {"6": 3, "7": 1}
2.
const arr = ["abcd", "lmnr", "ab", "dddd"];
const statistics = countBy(arr, element => element.length)
rwsult: statistics -> {"4": 3, "2": 1}
3.
const arr = [{age: 25, id: 123, name: "Vasya"},{age: 50, id: 123, name: "Vasya"},
{age: 25, id: 123, name: "Vasya"},{age: 70, id: 123, name: "Vasya"}];
const statistics = countBy(arr, element.age)
result statistics -> {"25": 2, "50": 1, "70": 1}
 */
