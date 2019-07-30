function Summation(arr:number[])
{
    

    var i:number;
    var isum:number=0;

    for(i=0;i<arr.length;i++)
    {
        isum=isum+arr[i];
    }
    return isum;

}

var iret:number;
var arr:number[]=[23,6,7,4,5,7];
iret=Summation(arr);
console.log("Addition is:"+iret);