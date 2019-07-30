function Maximum(no1:number,no2:number,no3:number)
{
var imax:number;
if((no1>no2)&&(no1>no3))
{
    imax=no1;
}
else if((no2>no3)&&(no2>no1))
{
     imax=no2;
}
else
{
     imax=no3;
}
return imax;
}



var iRet:number;

iRet=Maximum(78,23,67);
console.log(iRet);
