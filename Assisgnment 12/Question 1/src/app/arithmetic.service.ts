import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() 
  { }
    add(a: any,b: any)
    {
      return a+b;
    }
    sub(c: any,d: any)
    {
      return c-d;
    }
   
}
