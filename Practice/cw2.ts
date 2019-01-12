
// v 1
function f1(f: () => number, val: number): void {
    console.log(val + f());
}

function sumplus5V1() {
    return 5;   // -> change to arrow later
}
f1(sumplus5V1, 4);

// v 2
function f2(f: () => number, val: number): void {
    console.log(val + f());
}
let sumplus5V2 = () => 5;

f2(sumplus5V2, 4);