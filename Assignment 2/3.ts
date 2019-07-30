function MaximumS(arr:number[])
{
    

    var i:number;
    var j:number;
    var imax:number=arr[0];

    for(i=0;i<=arr.length;i++)
    {
        for(j=i+1;j<arr.length;j++)
        {
        if(arr[i]>arr[j])
        {
            imax=arr[i];
            arr[i]=arr[j];
            arr[j]=imax;
        }
        }

    }
    return arr[arr.length-2];

}

var iret:number;
var arr:number[]=[23,89,6,29,56,45,77,32];
iret=MaximumS(arr);
console.log("Second Maximum number is:"+iret);