import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {

  strDetails:string='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eum aliquid dolor ad eaque illo nobis recusandae distinctio unde deleniti, obcaecati perspiciatis iure, fuga consequuntur! Non itaque ipsa assumenda voluptatum?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem eum aliquid dolor ad eaque illo nobis recusandae distinctio unde deleniti, obcaecati perspiciatis iure, fuga consequuntur! Non itaque ipsa assumenda voluptatum?';
  
  constructor() { }

  ngOnInit(): void {
  }

}
