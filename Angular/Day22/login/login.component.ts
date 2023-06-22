import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:LoginService,
              private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(emailid:any,password:any){
    let obj={
      email:emailid,
      password:password
    }

    this.service.login(obj)
    .subscribe((response:any)=>{
      console.log(response);
      if(response.msg ==="Valid User"){
        
        sessionStorage.setItem("username",response.user.username)
        this.router.navigate(['/dashboard']);
        //navigate to dashboard

      }else{
        // display message
        //alert(response.msg);
      }

    })

  }

}
