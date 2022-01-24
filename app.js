const ar2 = [13, 17, 20, 23, 2, 40];
const arEvenOdd = ar2.filter((n, i, a) => a.length % 2 == 0 ? n % 2 == 0 : n % 2 == 1);
console.log(arEvenOdd);

/*
HW#14
  1.
write myFilter(array, callback) based on myForEach
callback - function with three possible parameters: current element, current index, referece to array
  2.
write myReduce(array, callback, initialResult) based on myForEach
callback - function with three possible parameters: current element, current index, referece to array

*/

let res = ar2.reduce((res, cur) => res + cur, 0);
console.log(`res = ${res}`);
const max = ar2.reduce((max, cur) => cur > max ? cur : max, ar2[0]);
console.log(`max = ${max}`);
res = ar2.reduce((res, cur) => res + cur);
console.log(`res = ${res}`);// if the user call does't contain a second argument, then the first element of the array will be
// as initial res (in this case iterating)

/*

 */