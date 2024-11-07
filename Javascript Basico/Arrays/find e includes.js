
const inventory = [
    {name: 'jaca', quantity: 2},
    {name: 'banana', quantity: 0},
    {name: 'cereja', quantity: 5}
];


function isCherries(fruit, index, arr) {
    return fruit.name === 'cereja';
}

console.log(inventory.find(isCherries));

const people = [
    { name: "John", age: 25 },
    { name: "Alice", age: 35 },
    { name: "Tom", age: 40 }
];
const firstOver30 = people.find(person => person.age > 30);
console.log(firstOver30);

const numbers = [1, 3, 7, 11, 5, 13];
const firstGreaterThanTen = numbers.find(num => num > 10);
console.log(firstGreaterThanTen);

const students = ['Joao', 'Pedro', 'Ana', 'Maria']
console.log(students.includes('Joao'))
console.log(students.includes('Guilherme'))

