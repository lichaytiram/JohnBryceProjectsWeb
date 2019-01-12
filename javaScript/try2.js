var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());

function hi() {
    console.log("hi to all");
}
var p1 = new Person("golan");
console.log(p1.getName());
console.log(p1);
hi();

