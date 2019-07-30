var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircleX.prototype.Circumference = function () {
        var areac;
        areac = 2 * this.pi * this.rad;
        return areac;
    };
    return CircleX;
}(Circle));
var obj5 = new CircleX();
console.log("Operation on Object 1");
obj5.Circle(5);
console.log(obj5.Area());
console.log(obj5.Circumference());
var obj6 = new CircleX();
console.log("Operation on Object 2");
obj6.Circle(8);
console.log(obj6.Area());
console.log(obj6.Circumference());
