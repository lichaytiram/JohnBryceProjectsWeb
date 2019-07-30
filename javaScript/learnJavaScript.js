

function f1() {
    console.log("print");

    this.x = 'hiX';

this.info = function(){
    return this.x;
}

}

let x1 = f1();
let x2 = new f1();


// console.log(x1.x);
console.log(x2.info);

