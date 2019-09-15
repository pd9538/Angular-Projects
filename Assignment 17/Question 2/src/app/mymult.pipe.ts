import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mymult'
})
export class MymultPipe implements PipeTransform {

  transform(value1:number,value2:number) {
    return value1*value2;
  }

}
