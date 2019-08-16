import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, param:string): string
   {
     let str:string="";

    if(param=="Prime")
    {
      let i:number=0;
      for(i=2;i<value;i++)
      {
        if(value%i==0)
          str="It is not prime number";
        else
        str="It is Prime number";
      }
    }
    if(param=="Perfect")
    {
      let i:number=0;
      let sum:number=1;

      for(i=2;i*i<=value;i++)
      {
        if(value%i==0)
        {
          if(i*i!=value)
          {
            sum=sum+i+value/i;
          }
          else
          {
            sum=sum+i;
          }
        }
      }
      if(sum==value && value!=1)
        str="It is Perfect number";
      else
        str="It is not Perfect number";
      }

      if(param=="Even")
      {
        if(value%2==0)
        {
          str="It is Even number";
        }
        else
        {
          str="It is not Even number";
        }
      }

      if(param=="Odd")
      {
        if(value%2==1)
        {
          str="It is Odd number";
        }
        else
        {
          str="It is not Odd number";
        }
      }
    return str;
  }

}
