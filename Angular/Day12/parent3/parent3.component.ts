import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Child3Component } from '../child3/child3.component';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.css']
})
export class Parent3Component implements OnInit,AfterViewInit {

  @ViewChild('mydiv') MyDiv!:ElementRef;

  @ViewChild(Child3Component) childAccess!:Child3Component;

  constructor() { }

  ngOnInit(): void {
    console.log(this.MyDiv);
  }

  ngAfterViewInit(): void {
    console.log(this.MyDiv);
    this.MyDiv.nativeElement.className="mydiv";
    this.MyDiv.nativeElement.style.width="350px";
    this.MyDiv.nativeElement.style.margin="10px"
    this.MyDiv.nativeElement.style.padding="10px"
  }


  onPropertyAccess(){
    this.childAccess.username="Sumit Raokhande";
  }

  onMethodAccess(){
    this.childAccess.onAlert();
  }

  onIncerment(){
    this.childAccess.incrementCount();
  }

  onDecrement(){
    this.childAccess.decrementCount();
  }

}
