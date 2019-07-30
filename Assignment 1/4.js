function ChkPrime(no) {
    var icnt = 0;
    for (var i = 1; i <= no; i++) {
        if (no % i == 0) {
            icnt++;
        }
    }
    if (icnt == 2) {
        return true;
    }
    else {
        return false;
    }
}
var bRet;
var Value = 11;
bRet = ChkPrime(Value);
if (bRet == true) {
    console.log(Value + "is Prime number");
}
else {
    console.log(Value + "is not prime number");
}
