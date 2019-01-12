interface IFly {
    fly(num: number): void;
    land(): boolean;

}

class Kite implements IFly {
    private color: String;
    private price: number;

    constructor(color: String, price: number) {
        this.color = color;
        this.price = price > 0 ? price : 0;
    }
    public fly(num: number): void {
        console.log(num);
    }

    public land(): boolean {
        return false;
    }
}

class Jet implements IFly {
    private name: String;
    private companyName: String;
    private destination: String;

    constructor(name: String, companyName: String, destination: String) {
        this.name = name;
        this.companyName = companyName;
        this.destination = destination;
    }
    public getName(): String {
        return this.name;
    }
    public getCompanyName(): String {
        return this.name;
    }
    public getDestination(): String {
        return this.name;
    }
    public fly(num: number): void {
        console.log(num);
    }

    public land(): boolean {
        return true;
    }
}

class Bird implements IFly {
    private type: String;
    private age: number;
    private color: String;

    constructor(type: String, age: number, color: String) {
        this.type = type;
        this.age = age > 0 ? age : 0;
        this.color = color;
    }

    public fly(num: number): void {
        console.log(num);
    }

    public land(): boolean {
        return true;
    }
}

function rand(): number {
    return Math.round(Math.random() * 3);
}

var arrayIfly: IFly[] = new Array(3);

for (var i = 0; i < arrayIfly.length; i++) {
    var num = rand();
    if (num == 0)
        arrayIfly[i] = new Bird("butterfly", 23, "white");
    else if (num == 1)
        arrayIfly[i] = new Jet("Ori", "el al", "USA");
    else
        arrayIfly[i] = new Kite("of", 50);
}


for (var i = 0; i < arrayIfly.length; i++) {
    console.log(arrayIfly[i]);
    console.log(arrayIfly[i].fly(30));
    console.log(arrayIfly[i].land());
}

