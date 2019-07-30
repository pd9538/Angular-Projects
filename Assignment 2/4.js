function Count(no) {
    return no.toString().length;
}
var i = Count(153);
function ChkArmstrong(no) {
    var idigit = 0;
    var isum = 0;
    var itemp = no;
    while (no > 0) {
        idigit = no % 10;
        isum = isum + Math.pow(idigit, i);
        no = Math.floor(no / 10);
    }
    if (isum == itemp) {
        console.log(itemp + "is Armstrong number");
    }
    else {
        console.log(itemp + "is not Armstrong number");
    }
}
ChkArmstrong(153);
