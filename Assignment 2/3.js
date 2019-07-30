function Maximum(arr) {
    var i;
    var j;
    var imax = arr[0];
    for (i = 0; i <= arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                imax = arr[i];
                arr[i] = arr[j];
                arr[j] = imax;
            }
        }
    }
    return arr[arr.length - 2];
}
var iret;
var arr = [23, 89, 6, 82, 56, 45, 77, 32];
iret = Maximum(arr);
console.log("Second Maximum number is:" + iret);
