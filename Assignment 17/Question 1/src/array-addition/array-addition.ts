
export function ArrayAddition()
{
    let arr=[12,13,14,15,16];
    let isum:number=0;
    let i:number=0;

    for(i=0;i<arr.length;i++)
    {
        isum=isum+arr[i];
    }

    return isum;
}