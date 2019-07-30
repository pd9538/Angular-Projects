class Arithmetic
{
    no1:number;
    no2:number;

    Arithmetic(number1:number,number2:number)
    {
        this.no1=number1;
        this.no2=number2;
    }

    Addition():void
    {
        console.log(this.no1+this.no2);
    }

    Subtraction():void
    {
        console.log(this.no1-this.no2);
    }
 
    Multiplication():void
    {
        console.log(this.no1*this.no2);
    }

    Division():void
    {
        console.log(this.no1/this.no2);
    }

}

var obj1=new Arithmetic();
console.log("Operation on Object 1");
obj1.Arithmetic(11,101);
obj1.Addition();
obj1.Subtraction();
obj1.Multiplication();
obj1.Division();

var obj2=new Arithmetic();
console.log("Operation on Object 2");
obj2.Arithmetic(11,21);
obj2.Addition();
obj2.Subtraction();
obj2.Multiplication();
obj2.Division();