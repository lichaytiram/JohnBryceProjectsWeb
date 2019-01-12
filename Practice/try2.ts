class Person {
    private name: String;

    constructor(name: String) {
        this.name = name;
    }

    public getName(): String {
        return this.name;
    }
}

var p1 = new Person("golan");
console.log(p1.getName());
console.log(p1);
