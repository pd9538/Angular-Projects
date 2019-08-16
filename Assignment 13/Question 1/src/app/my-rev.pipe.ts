import { Pipe, PipeTransform } from '@angular/core';
import { strictEqual } from 'assert';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform {

  transform(value: string): string 
  {
    let temp:string="";
    let i:number;
    let irev:string;
    for(i=value.length-1;i>=0;i--)
    {
      temp=temp+value.charAt(i);
    }
    return temp;
  }

}
