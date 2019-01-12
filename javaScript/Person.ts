class Person {
    public name: string;
    public age: number;
}

var p1: Person = new Person;
var p2: Person = new Person;
p1.age = 20
p1.name = "Alice";
p2.name = "Bob";
p2.age = 35;
let array: Person[] = new Array<Person>(2);
array[0] = p1;
array[1] = p2;

console.log("for");
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}

console.log("for of");
for (let num of array) {
    console.log(num);
}

console.log("for in");

for (let num in array) {
    console.log(num);
}

