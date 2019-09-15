
export function CountCapital(str) 
{
let count:number=0;
let len:number=str.length;
let ch:string;
    for(let i:number=0;i<len;i++)
    {
        ch=str.charAt(i);

        if(ch>='A' && ch<='Z')
        {
            count++;
        }
    }
    return count;
}