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

class CircleX extends Circle
{
    Circumference():number
    {
      var areac:number;

      areac=2*this.pi*this.rad;
      return areac;
    }

}

var obj5=new CircleX();
console.log("Operation on Object 1");
obj5.Circle(5);
console.log(obj5.Area());
console.log(obj5.Circumference());

var obj6=new CircleX();
console.log("Operation on Object 2");
obj6.Circle(8);
console.log(obj6.Area());
console.log(obj6.Circumference());

