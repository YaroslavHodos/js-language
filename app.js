//task1
function Deferrend() {
    this.function = [];
}
Deferrend.prototype.then = function(thenFn) {
    this.function.push(thenFn);
}
Deferrend.prototype.resolve = function(result) {
    this.function.forEach(fun => result = fun(result));
}
const d = new Deferrend()
d.then(function(res){ console.log('1 ',res); return 'a'; });

d.then(function(res){ console.log('2 ',res); return 'b'; });

d.then(function(res){ console.log('3 ',res); return 'c'; });

d.resolve('hello');

//task2
function MyArray(initValue) {
    this.value = initValue;
    this.array = [];
}
MyArray.prototype.setValue = function(value) {
    this.value = value;
    this.array = [];
}
MyArray.prototype.set = function(index, value) {
    this.array[index] = value;
}
MyArray.prototype.get = function(index) {
    return this.array[index] ?? this.value;
}

const myArray = new MyArray(10);
console.log("should be 10",myArray.get(100)) //dispay out = 10
myArray.set(100, 500) //sets 500 of index 100
console.log("should be 10",myArray.get(200)) // dispay out = 10
console.log("should be 500",myArray.get(100)) // dispay out = 500
myArray.setValue(300);
console.log("should be 300",myArray.get(100)) // dispay out = 300
console.log("should be 300",myArray.get(200)) // dispay out = 300