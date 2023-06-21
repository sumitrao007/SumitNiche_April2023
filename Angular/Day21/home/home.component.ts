import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  json={
    fname:'Sumit',
    lname:'Raokande',
    status:'Active'
  }

  myid:number=9;
  myusername:string='Sumit-Raokhande';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onPage1(){
  //    this.router.navigate(['/Page1']);
  this.router.navigate(['']);
  }
  onPage2(){
    this.myid=8;
    this.router.navigate(['/Page2',this.myid])
  }
  onPage3(){
    this.router.navigate(['/Page3',this.myid,this.myusername])
  }

  onFollower(){
    this.router.navigate(['/Follower']);
  }
  onQueryParam(){
    this.router.navigate(['/queryparamater'],{
      queryParams:this.json
    })
  }


}
