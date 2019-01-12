var Kite = /** @class */ (function () {
    function Kite(color, price) {
        this.color = color;
        this.price = price > 0 ? price : 0;
    }
    Kite.prototype.fly = function (num) {
        console.log(num);
    };
    Kite.prototype.land = function () {
        return false;
    };
    return Kite;
}());
var Jet = /** @class */ (function () {
    function Jet(name, companyName, destination) {
        this.name = name;
        this.companyName = companyName;
        this.destination = destination;
    }
    Jet.prototype.getName = function () {
        return this.name;
    };
    Jet.prototype.getCompanyName = function () {
        return this.name;
    };
    Jet.prototype.getDestination = function () {
        return this.name;
    };
    Jet.prototype.fly = function (num) {
        console.log(num);
    };
    Jet.prototype.land = function () {
        return true;
    };
    return Jet;
}());
var Bird = /** @class */ (function () {
    function Bird(type, age, color) {
        this.type = type;
        this.age = age > 0 ? age : 0;
        this.color = color;
    }
    Bird.prototype.fly = function (num) {
        console.log(num);
    };
    Bird.prototype.land = function () {
        return true;
    };
    return Bird;
}());
function rand() {
    return Math.round(Math.random() * 3);
}
var arrayIfly = new Array(3);
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
