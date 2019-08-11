import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  CountCapital(str:any)
  {
    for(var i=0,len=str.length,icnt=0,ch;i<len;++i)
    {
      ch=str.charAt(i);
      if(ch>='A'&& ch<='Z')
        ++icnt;
    }
    return icnt;
}
}