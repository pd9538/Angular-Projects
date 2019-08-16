import { Pipe, PipeTransform } from '@angular/core';
import { FnParam } from '@angular/compiler/src/output/output_ast';

@Pipe({
  name: 'mymult'
})
export class MymultPipe implements PipeTransform {

  transform(value: number, param:number): number 
  {
    return value*param;
  }

}
