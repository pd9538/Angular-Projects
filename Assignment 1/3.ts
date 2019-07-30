function DisplayFactors(no:number)
{
    for(var i:number=1;i<no;i++)
    {
        if(no%i==0)
        {
            console.log(i);
        }
    }
}

DisplayFactors(20);