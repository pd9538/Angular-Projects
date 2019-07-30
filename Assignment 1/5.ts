function Fibonacci(no:number)
{
    var First:number=1;
    var second:number=0;
    var next:number=1;
    var i:number=0;
    next=First+second;

    while(next<=no)
    {
        console.log(next);
        First=second;
        second=next;
        next=First+second;
    }
}

Fibonacci(21);
