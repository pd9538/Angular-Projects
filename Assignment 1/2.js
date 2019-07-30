function Area(radius, pi) {
    if (pi === void 0) { pi = 3.14; }
    return pi * radius * radius;
}
var iret;
iret = Area(5);
console.log("Area of circle is:" + iret);
