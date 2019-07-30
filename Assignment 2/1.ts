function Maximum(arr:number[])
{
    

    var i:number;
    var imax:number=arr[0];

    for(i=0;i<=arr.length;i++)
    {
        if(arr[i]>imax)
        {
            imax=arr[i];
        }
    }
    return imax;

}

var iret:number;
var arr:number[]=[23,89,6,29,56,45,77,32];
iret=Maximum(arr);
console.log("Maximum is:"+iret);