import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

  strdata:string='Send data from parent component to child componnent....';

  jsonObj={
    id:9,
    fname:'Sumit',
    lname:'Raokhande'
  }

  msgSend:string='';
  sendDate:string='';

  @Input() AppParentData:string='';

  constructor() { }

  ngOnInit(): void {
  }

  onSend(){
    this.msgSend='Hopes so u r enjoying Angular 12 Module';
  }

  onSendDate(mydate:string){
    this.sendDate=mydate;
  }

}
