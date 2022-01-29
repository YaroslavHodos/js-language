function dispOccurrences(array) {
    const res = createObjOccurrences(array);
    Object.entries(res).sort((e1, e2) => {
        const res = e2[1] - e1[1];
        return res === 0 ? e1[0].localeCompare(e2[0]) : res;
    }).forEach(e => console.log(`${e[0]} -> ${e[1]}`));
}
//1.
function createObjOccurrences(arr) {
    return arr.reduce((res, cur) => {res[cur] = res[cur] ===
    undefined ? 1 : res[cur] + 1; return res}, {});
}
//2.
function countBy (ar, cbfun) {
    return ar.reduce((res, cur) => {res[cbfun(cur)] =
    res[cbfun(cur)] === undefined ? 1 : res[cbfun(cur)] + 1; return res}, {});
    
}

const ar = ["lmn", "d", "d", "lmn", "a", "lmn", "a", "bc"];
dispOccurrences(ar);

const arr1 = [6.4, 7.3, 6.5, 6.9];
const st1 = countBy(arr1, el => Math.floor(el));
console.log(st1);

const arr2 = ['abcd', 'lmnr', 'ab', 'dddd'];
const st2 = countBy(arr2, el => el.length);
console.log(st2);

const arr3 = [
{age: 25, id: 123, name: "Vasya"}, 
{age: 50, id: 123, name: "Vasya"},
{age: 25, id: 123, name: "Vasya"},
{age: 70, id: 123, name: "Vasya"}]
const st3 = countBy(arr3, el => el.age);
console.log(st3);
