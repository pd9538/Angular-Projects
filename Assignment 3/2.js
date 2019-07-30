var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.Circle = function (radius, pi) {
        this.rad = radius;
        if (pi == undefined) {
            this.pi = 3.14;
        }
    };
    Circle.prototype.Area = function () {
        var area;
        area = this.pi * this.rad * this.rad;
        return area;
    };
    return Circle;
}());
var obj3 = new Circle();
console.log("Operation on Object 1");
var iret1;
obj3.Circle(5);
iret1 = obj3.Area();
console.log(iret1);
var obj4 = new Circle();
console.log("Operation on Object 2");
var iret2;
obj4.Circle(8);
iret2 = obj4.Area();
console.log(iret2);
