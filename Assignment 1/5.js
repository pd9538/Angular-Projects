function Fibonacci(no) {
    var First = 1;
    var second = 0;
    var next = 1;
    var i = 0;
    next = First + second;
    while (next <= no) {
        console.log(next);
        First = second;
        second = next;
        next = First + second;
    }
}
//var iret:number;
Fibonacci(21);
//console.log(iret);
