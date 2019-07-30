class Circle
{
    rad:number;
    pi:number;

    Circle(radius: number, pi?:number)
    {
        this.rad=radius;
        if(pi==undefined)
        {
            this.pi=3.14;
        }
        
    }

    Area():number
    {
        var area:number;

        area=this.pi*this.rad*this.rad;
        return area;
    }
}

var obj3=new Circle();
console.log("Operation on Object 1");
var iret1:number;
obj3.Circle(5);
iret1=obj3.Area();
console.log(iret1);

var obj4=new Circle();
console.log("Operation on Object 2");
var iret2:number;
obj4.Circle(8);
iret2=obj4.Area();
console.log(iret2);