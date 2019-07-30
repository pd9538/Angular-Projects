function Summation(arr) {
    var i;
    var isum = 0;
    for (i = 0; i < arr.length; i++) {
        isum = isum + arr[i];
    }
    return isum;
}
var iret;
var arr = [23, 6, 7, 4, 5, 7];
iret = Summation(arr);
console.log(iret);
