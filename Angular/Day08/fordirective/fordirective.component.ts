import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course:string[]=["Core java",'Angular 12','AWS','Jenkings','Spring Boot'];

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
      name:'MotoRealmetrolla',
      price:150000,
      qty:1
    },
    {
      name:'Vivo',
      price:25000,
      qty:1
    }
  ];

  selected:string='';

  country=[
    {
      cid:1,
      cname:'India'
    },
    {
      cid:2,
      cname:'Japan'
    },
    {
      cid:3,
      cname:'US'
    },
    {
      cid:4,
      cname:'SouthAfrica'
    },
    {
      cid:5,
      cname:'China'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

  onMouseOver(item:any){
    console.log("Mouse Over Event Occur..." +item)
    this.selected=item.name;
  }

  onMouseOut(){
    console.log("===========Mouse Out event occur============");
    this.selected='';
  }

}
