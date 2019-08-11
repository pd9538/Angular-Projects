import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  ChkPrime(num:any)
  {
    var icnt=0;

    for(icnt=2;icnt<=(num/2);icnt++)
    {
      if((num%icnt)==0)
      {
        break;
      }
    }
    if(icnt>(num/2))
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}
