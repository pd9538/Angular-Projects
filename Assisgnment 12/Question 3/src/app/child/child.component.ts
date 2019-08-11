import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
public obj1;
public obj2;
  constructor(private _service1:NumberService,private _service2:StringService) { }

  ngOnInit() {
this.obj1=this._service1.ChkPrime(24);
this.obj2=this._service2.CountCapital("InfoSyStEm");
  }

}
