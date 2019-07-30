function Maximum(no1, no2, no3) {
    /*var max:number;
    var no1:number=23;
    var no2:number=89;
    var no3:number=6;*/
    var imax;
    if ((no1 > no2) && (no1 > no3)) {
        imax = no1;
    }
    else if ((no2 > no3) && (no2 > no1)) {
        imax = no2;
    }
    else {
        imax = no3;
    }
    return imax;
}
var iRet;
iRet = Maximum(78, 23, 67);
console.log(iRet);
