import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Output() ChildStrEvent=new EventEmitter();

  @Output() ChildArrDataEvent=new EventEmitter();

  @Output() ChildDateEvent=new EventEmitter();

  str:string='Data send to parent';

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

  constructor() { }

  ngOnInit(): void {
  }
  onSend(){
    this.ChildStrEvent.emit(this.str);
    this.ChildArrDataEvent.emit(this.arrProduct);
  }

  onSendDate(useDate:any){
      this.ChildDateEvent.emit(useDate)
  }

}
