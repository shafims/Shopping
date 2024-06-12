import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private userdata:RegisterService, private router:Router, private cookie:CookieService){}

  UserData:any[] = [];
  LoginUser:any;

  ngOnInit():void {
    this.userdata.GetUser().subscribe(res => {
      this.UserData = res;

      // console.log(this.UserData);
    })
  }
  
  LoginClick(e:any){
    this.LoginUser = this.UserData.find(user => user.Email == e.Email);
    // console.log(e.Email);
    // console.log(this.LoginUser.Email);

    if(this.LoginUser.Email == e.Email && this.LoginUser.Password == e.Password) {
      console.log(e.Email, e.Password);
    console.log(this.LoginUser.Email, this.LoginUser.Password);
      this.cookie.set("Email", e.Email);
    this.router.navigate(['/home']);
    }
  }
  
}
