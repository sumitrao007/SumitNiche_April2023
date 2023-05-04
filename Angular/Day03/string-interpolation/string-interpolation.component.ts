import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  name:string='Sumit Raokhande';
imgUrl:string="../../assets/bg7.jpg";
num:number=4;
  constructor() { }

  ngOnInit(): void {
  }

  getName():string{
    return (this.name);
  }

}
