import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demobootstrap',
  templateUrl: './demobootstrap.component.html',
  styleUrls: ['./demobootstrap.component.css']
})
export class DemobootstrapComponent implements OnInit {

  arrProduct=[
    {
      name:'Mototrolla',
      price:30000,
      qty:1
    },
    {
      name:'One Plus',
      price:40000,
      qty:1
    },
    {
      name:'Real Me',
      price:150000,
      qty:1
    },
    {
      name:'Vivo',
      price:25000,
      qty:1
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
