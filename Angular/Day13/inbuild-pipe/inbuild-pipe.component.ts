import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuild-pipe',
  templateUrl: './inbuild-pipe.component.html',
  styleUrls: ['./inbuild-pipe.component.css']
})
export class InbuildPipeComponent implements OnInit {

  strData:string='Hopes so U r enjoying angular Module 12 by Sumit raokhande';
  num2:number=-452.78956324557;

  mydate=new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
