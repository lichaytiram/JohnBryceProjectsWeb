// v 1
function f1(f, val) {
    console.log(val + f());
}
function sumplus5V1() {
    return 5; // -> change to arrow later
}
f2(sumplus5V1, 4);
// v 2
function f2(f, val) {
    console.log(val + f());
}
var sumplus5V2 = function () { return 5; };
f2(sumplus5V2, 4);
