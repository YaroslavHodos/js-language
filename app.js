const ar = [-10, 50, -12, 80, 40];
ar.push(70);

// let str = '';
// ar.forEach(function(n) {
//     str += n + '#';
// })
//str = str.substring(0, str.length-1);

// const ar1 = ar.slice(1);
//  let str = '' + ar[0];
//  ar1.forEach(n => str += '#' + n);
// console.log(str);

ar.forEach((n, i, a) => console.log(`${i+1} of ${a.length} - ${n}`));

/**   HW#13
  1.
write function myForRach(array, callback-function);
array - being itereted array
callback-function - fun that will be called for each element of array
call-back-function should take three argument: curent element,current index, being iterated array
 
*/
const ar2 = ar.map(n => n * 2);
console.log(ar2);
const ar3 = ar.map((n, i, a) => `<li>${i + 1} of ${a.length} - ${n}</li>`);
console.log(ar3);