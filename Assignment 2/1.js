function Maximum(arr) {
    var i;
    var imax = arr[0];
    for (i = 0; i <= arr.length; i++) {
        if (arr[i] > imax) {
            imax = arr[i];
        }
    }
    return imax;
}
var iret;
var arr = [110, 89, 6, 29, 56, 45, 77, 32];
iret = Maximum(arr);
console.log(iret);
