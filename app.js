const circle = {radius: 20, square: function() {
    return 3.14 * (this.radius ** 2)
}, perimetr: () => 2 * 3.14 * this.radius,
toString: function() {
    return `radius of this circkle is ${this.radius}`
}};
console.log(`square = ${circle.square()} \nperimetr = ${circle.perimetr()}`);

console.log();
function square(circle) {
    return 3.14 * (circle.radius ** 2);
}
console.log(`squareFan = ${square(circle)}`);

console.log(`circle: ${circle}`);

function Circle(radius) {
    this.radius = radius;
}
Circle.prototype.perimetr = function() {
    return 2 * 3.14 * this.radius;
}
Circle.prototype.square = function() {
    return 3.14 * (this.radius ** 2);
}
Circle.prototype.toString = function() {
    return `radius of this circle is ${this.radius}`
}
const circle10 = new Circle(10);

/* HW#16
1.
const d = new Deferrend()
d.then(function(res){console.log('1', res); return 'a'; });

d.then(function(res){console.log('2', res); return 'b'; });

d.then(function(res){console.log('3', res); return 'c'; });

d.resolve('hello');
output
1 hello
2 a
3 b

2.
const myArray = new MyArray(10);
output
myArray.get(index:1000) - result 10
write method geting an index value and returning common value (set in constructor)

myArray.set(index, value);
write method set that sets a given value and a given index

myArray.setValue(value) sets new value in all elements of myArray

example
*/
// const myArray = new MyArray(10);
// console.log(myArray.get(100)) //dispay out = 10
// myArray.set(100, 500) //sets 500 of index 100
// console.log(myArray.get(200)) // dispay out = 10
// console.log(myArray.get(100)) // dispay out = 500
// myArray.setValue(300);
// console.log(myArray.get(100)) // dispay out = 300
// console.log(myArray.get(200)) // dispay out = 300

//standart constructions
Array.prototype.filter = function(cbPredicate) {
    console.log('Tel-Ran');
    const res = [];
    this.forEach((n, i, a) => cbPredicate(n, i, a) && res.push(n));
    return res;
}
const ar = [1, 2, 4, 5, 100];
ar.filter(n => n % 2 !== 0).forEach(n => console.log(n));