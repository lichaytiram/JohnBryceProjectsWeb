console.log("start try 1");

for (var i = 0; i < 3; i++) {
    console.log(i);
}

let num1 = 5;
let num2 = 6;

var str1 = "result of 1: " + num1 + " + " + num2 + " = " + (num1 + num2);
var str2 = `result of 2: ${num1} + ${num2} = ${num1 + num2}`;
console.log(str1);
console.log(str2);

var array1 = new Array(3);
array1[0] = 3;
array1[1] = 4;
array1[2] = 8;
for (let index = 0; index < array1.length; index++) {
    console.log(array1[index]);

}

console.log("function 1");
console.log(use(num1, num2) + 10);



function use(num1, num2) {
    return num1 + num2;
}
console.log("function 2");
k();
function k() {
    console.log("check function 2");

}



