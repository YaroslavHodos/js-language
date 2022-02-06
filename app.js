class Person {
    #id;
    #name;
    constructor(id, name) {
        this.#id = id;
        this.#name = name;
    }
    getId() {
        return this.#id;
    }
    getName() {
        return this.#name;
    }
    toString() {
        return `id: ${this.#id}; name: ${this.#name};`
    }
}

const pr = new Person(123, 'Moshe');
console.log(`person is ${pr}`);

class Employee extends Person {
    #salary;
    constructor(id, name, salary) {
        super(id, name);// call the constructor of Person
        this.#salary = salary;
    }
    computeSalary() {
        return this.#salary;
    }
    toString(){
        return super.toString() + ` salary: ${this.computeSalary()};`;
    }
}
const pr2 = new Employee(124, 'Sara', 5000);
console.log(`person2 is ${pr2}`);
console.log(typeof(pr2));// just object
console.log(pr2.constructor.name)// only this way JS allow getting constructor name

class Child extends Person {
    #kinderGarten;
    constructor(id, name, kinderGarten) {
    super(id, name);
    this.#kinderGarten = kinderGarten;
    }
    getKinderGarten() {
        return this.#kinderGarten;
    }
    toString() {
        return super.toString() + ` kinderGarten: ${this.#kinderGarten};`;
    }
}
const child = new Child(125, 'Natan', 'Karamelki');
console.log(`child is ${child}`);

class WageEmployee extends Employee {
    #hours;
    #wage;
    constructor(id, name, salary, hours, wage) {
        super(id, name, salary);
        this.#hours = hours;
        this.#wage = wage;
    }
    computeSalary(hours, wage) {
        return super.computeSalary() + this.#hours * this.#wage;
    }
    
}
const pr3 = new wageEmployee(126,'Asaf', 1000, 10, 100);
console.log(`pr3 is ${pr3}`);

const persons = [
    new Child(100, 'Olya', 'Shalom'),
    new Child(101, 'Sergey', 'Boker'),
    new Child(102, 'Kolya', 'Shalom'),
    new Employee(103, 'Vasya', 1000),
    new WageEmployee(104, 'Tolya', 1000, 10, 100)
]
function CountOfPersonsType(persons, type) {
    //return count of persons of the given type
    //Exemple:
    //CountOfPersons(persons, 'WageEmployee') -> 1
}
function ComputeSalaryBudget(persons) {
    //returns total salary of all emloyee objects in the given array
    //Example:
    //ComputeSalaryBudget(persons) -> 3000
}
function CountChildrenKinderGarten(persons, kindergarten) {
    //returns number of the children in the give array
    //Example:
    //CountChildrenKinderGarten(persons, "Shalom") -> 2
}