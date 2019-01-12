var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        if (name.length >= 4)
            this._name = name;
        if (age >= 0 && age <= 120)
            this._age = age;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            if (name.length >= 4)
                this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            if (age >= 0 && age <= 120)
                this._age = age;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, salary) {
        var _this = _super.call(this, name, age) || this;
        if (salary > 0)
            _this._salary = salary;
        return _this;
    }
    Object.defineProperty(Teacher.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        enumerable: true,
        configurable: true
    });
    return Teacher;
}(Person));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, grade) {
        var _this = _super.call(this, name, age) || this;
        if (grade > 0 && grade <= 100)
            _this._grade = grade;
        return _this;
    }
    Object.defineProperty(Student.prototype, "grade", {
        get: function () {
            return this._grade;
        },
        enumerable: true,
        configurable: true
    });
    return Student;
}(Person));
console.log();
// first array
var array1 = new Array(4);
var t1 = new Teacher("olaaa", 28, 3000);
var t2 = new Teacher("orana", 86, 2300);
var t3 = new Student("oded", 23, 84);
var t4 = new Student("oderima", 16, 21);
array1[0] = t1;
array1[1] = t2;
array1[2] = t3;
array1[3] = t4;
for (var i = 0; i < array1.length; i++) {
    if (array1[i] instanceof Teacher)
        console.log("name: " + array1[i].name + " ,age: " + array1[i].age + " ,salary: " + array1[i].salary);
    else
        console.log("name: " + array1[i].name + " ,age: " + array1[i].age + " ,grade: " + array1[i].grade);
}
// second array
var array2 = [new Teacher("olaaa", 28, 3000), new Teacher("orana", 86, 2300), new Student("oded", 23, 84), new Student("oderima", 16, 21)];
console.log();
array2[0].name = "This is a new name";
array2[0].age = 3;
array2[3].name = "wooooooooooooooow";
array2[3].age = 99999999999999999;
for (var i = 0; i < array2.length; i++) {
    if (array2[i] instanceof Teacher)
        console.log("name: " + array2[i].name + " ,age: " + array2[i].age + " ,salary: " + array2[i].salary);
    else
        console.log("name: " + array2[i].name + " ,age: " + array2[i].age + " ,grade: " + array2[i].grade);
}
