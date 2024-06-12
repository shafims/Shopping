import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private register:RegisterService){}
  User:any[] = [];

  RegisterClick(e:any) {

  }
  ngOnInit():void {
    this.register.GetUser().subscribe(user => this.User = user);
    console.log(this.User);
    console.log("hello");
  }

  name_error:string= '';

  VerifyUser(e:any) {
    for(var item of this.User) {
      if(item.Name == e.target.value) {
        this.name_error = 'User Name Taken - Try Another';
      } else {
        this.name_error = 'User Name Available';
      }
    }
  }

  email_error:string = '';
  VerifyEmail(e:any) {
    
  }

}
