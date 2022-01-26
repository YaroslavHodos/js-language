const person1 = {id: 123, name: 'Moshe', address: {city: 'Lod', street: 'Sokolov'}};
const person2 = {id: 123, name: 'Moshe', address: {city: 'Lod', street: 'Sokolov'}};

console.log(`'123' == 123 is ${'123' == 123}`);
console.log(`'123' === 123 is ${'123' === 123}`);

console.log(`person1 == person2 is ${person1 == person2}`);
console.log(`JSON.stringify(person1) == JSON.stringify(person2) is ${JSON.stringify(person1) == JSON.stringify(person2)}`);
console.log(JSON.stringify(person1));
console.log(`name of person1 is ${person1.name}`);
console.log(`pers1 live in sity ${person1.addres.city}`);

Object.keys(person1).forEach(k => console.log(k));// array of the object keys
console.log("");

Object.values(person1).forEach(v => console.log(v));// array of the object values
console.log("");

Object.entries(person1).forEach(c => console.log(c));// array of arrays - [key, value]
console.log("");
console.log(Object.entries(person1));// array of arrays - [key, value]

function createAddress(city, street) {
  // return {city: city, street: street} = {city, street}
  return {city, street};
}
function createPerson(id, name, address) {
  return {id, name, address};
}

const persons = [
  createPerson(123, "Vasya", createAddress("Rehovot", "Parshani")),
  createPerson(124, "Olya", createAddress("Rehovot", "Plaut")),
  createPerson(125, "Tolya", createAddress("Tel-Aviv", "Dizengoff")),
]
/**
HW#14

3.
applaying methods of arrays you shold find the persons living in Rehovot and display them out
  4.
applaying methods of arrays you shold find the person don't liv in Rehovot and move the at begining of the array persons
 */