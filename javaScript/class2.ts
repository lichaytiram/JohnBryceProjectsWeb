abstract class Person {
    private _name: String;
    private _age: number;
    constructor(name: String, age: number) {
        if (name.length >= 4)
            this._name = name;
        if (age >= 0 && age <= 120)
            this._age = age;
    }
    get name(): String {
        return this._name;
    }
    get age(): number {
        return this._age;
    }

    set name(name: String) {
        if (name.length >= 4)
            this._name = name;
    }
    set age(age: number) {
        if (age >= 0 && age <= 120)
            this._age = age;
    }
}
class Teacher extends Person {
    private _salary: number;
    constructor(name: String, age: number, salary: number) {
        super(name, age);
        if (salary > 0)
            this._salary = salary;
    }
    get salary(): number {
        return this._salary;
    }
}

class Student extends Person {
    private _grade: number;
    constructor(name: String, age: number, grade: number) {
        super(name, age);
        if (grade > 0 && grade <= 100)
            this._grade = grade;
    }
    get grade(): Number {
        return this._grade;
    }
}
console.log();

// first array
let array1: Person[] = new Array<Person>(4);
let t1 = new Teacher("olaaa", 28, 3000);
let t2 = new Teacher("orana", 86, 2300);
let t3 = new Student("oded", 23, 84);
let t4 = new Student("oderima", 16, 21);
array1[0] = t1;
array1[1] = t2;
array1[2] = t3;
array1[3] = t4;

for (var i = 0; i < array1.length; i++) {
    if (array1[i] instanceof Teacher)
        console.log("name: " + array1[i].name + " ,age: " + array1[i].age + " ,salary: " + (<Teacher>array1[i]).salary);
    else
        console.log("name: " + array1[i].name + " ,age: " + array1[i].age + " ,grade: " + (<Student>array1[i]).grade);
}

// second array
let array2: Person[] = [new Teacher("olaaa", 28, 3000), new Teacher("orana", 86, 2300), new Student("oded", 23, 84), new Student("oderima", 16, 21)];
console.log();

array2[0].name = "This is a new name";
array2[0].age = 3;
array2[3].name = "wooooooooooooooow";
array2[3].age = 99999999999999999;

for (var i = 0; i < array2.length; i++) {
    if (array2[i] instanceof Teacher)
        console.log("name: " + array2[i].name + " ,age: " + array2[i].age + " ,salary: " + (<Teacher>array2[i]).salary);
    else
        console.log("name: " + array2[i].name + " ,age: " + array2[i].age + " ,grade: " + (<Student>array2[i]).grade);
}
