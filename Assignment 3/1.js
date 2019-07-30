var Arithmetic = /** @class */ (function () {
    function Arithmetic() {
    }
    Arithmetic.prototype.Arithmetic = function (number1, number2) {
        this.no1 = number1;
        this.no2 = number2;
    };
    Arithmetic.prototype.Addition = function () {
        console.log(this.no1 + this.no2);
    };
    Arithmetic.prototype.Subtraction = function () {
        console.log(this.no1 - this.no2);
    };
    Arithmetic.prototype.Multiplication = function () {
        console.log(this.no1 * this.no2);
    };
    Arithmetic.prototype.Division = function () {
        console.log(this.no1 / this.no2);
    };
    return Arithmetic;
}());
var obj1 = new Arithmetic();
console.log("Operation on Object 1");
obj1.Arithmetic(11, 101);
obj1.Addition();
obj1.Subtraction();
obj1.Multiplication();
obj1.Division();
var obj2 = new Arithmetic();
console.log("Operation on Object 2");
obj2.Arithmetic(11, 21);
obj2.Addition();
obj2.Subtraction();
obj2.Multiplication();
obj2.Division();
