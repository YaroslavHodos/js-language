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

class Child extends Person {
    #kindergarten;
    constructor(id, name, kindergarten) {
    super(id, name);
    this.#kindergarten = kindergarten;
    }
    getKinderGarten() {
        return this.#kindergarten;
    }
    toString() {
        return super.toString() + ` kindergarten: ${this.#kindergarten};`;
    }
}

class WageEmployee extends Employee {
    #hours;
    #wage;
    constructor(id, name, salary, hours, wage) {
        super(id, name, salary);
        this.#hours = hours;
        this.#wage = wage;
    }
    computeSalary() {
        return super.computeSalary() + this.#hours * this.#wage;
    }
    
}

const persons = [
    new Child(100, 'Olya', 'Shalom'),
    new Child(101, 'Sergey', 'Boker'),
    new Child(102, 'Kolya', 'Shalom'),
    new Employee(103, 'Vasya', 1000),
    new WageEmployee(104, 'Tolya', 1000, 10, 100)
]
function CountOfPersonsType(persons, type) {
    return persons.filter(n => n.constructor.name === type).length;
}
console.log(CountOfPersonsType(persons, 'WageEmployee'));

function ComputeSalaryBudget(persons) {
    return persons.filter(n => n.constructor.name !== 'Child')
    .reduce((res, per) => res + per.computeSalary(), 0);
}
console.log(ComputeSalaryBudget(persons))

function CountChildrenKinderGarten(persons, kindergarten) {
    return persons.filter(n => n.getKinderGarten !== undefined)
    .filter(n => n.getKinderGarten() === kindergarten).length;
}
console.log(CountChildrenKinderGarten(persons, 'Shalom'));