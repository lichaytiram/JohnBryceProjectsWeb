var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var p1 = new Person;
var p2 = new Person;
p1.age = 20;
p1.name = "Alice";
p2.name = "Bob";
p2.age = 35;
var array = new Array(2);
array[0] = p1;
array[1] = p2;
console.log("for");
for (var index = 0; index < array.length; index++) {
    console.log(array[index]);
}
console.log("for of");
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var num = array_1[_i];
    console.log(num);
}
console.log("for in");
for (var num in array) {
    console.log(num);
}
