import { Component, OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
public obj;
public obj1;
  constructor(private _service: ArithmeticService) {

   }

  ngOnInit() 
  {
    this.obj=this._service.add(10,20);
    this.obj1=this._service.sub(30,10);
  }

}
