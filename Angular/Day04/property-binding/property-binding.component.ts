import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  name:string='Sumit raokhande';
  imgUrl:string='../../assets/bg7.jpg';
  colCount:number=2;
  ishidden:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

}
