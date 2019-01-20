function sum() {
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var sum = n1 + n2;
    console.log(sum);
    localStorage.setItem(n1, n2);
}

function res() {
    localStorage.clear();
}