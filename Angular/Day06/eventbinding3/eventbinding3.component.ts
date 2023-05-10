import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding3',
  templateUrl: './eventbinding3.component.html',
  styleUrls: ['./eventbinding3.component.css']
})
export class Eventbinding3Component implements OnInit {

  result:number=0;
  isShow:boolean=false;
  name:string='';
  constructor() { }

  ngOnInit(): void {
  }

  onChange(myname:any){
    console.log("Change event occur...")

    myname.style.background='green';
    myname.style.color='white';
  }

  onKeyUp(){
    console.log("Key Up Event occur..")
  }

  onKeyDown(){
    console.log("Key down Event Occur...")
  }

  onKeyEnter(){
    console.log("Enter key is pressed...")
  }

  onShowHide(){
    this.isShow=!this.isShow;
  }

}
