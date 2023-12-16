import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {
  email:string=""
  password:string=""
  password2:string=""

  constructor(private auth:AuthService, 
    private base:BaseService,
    private router:Router){}

  googleAuth(){
    this.auth.googleAuth()
  }

  addMessage(){
    this.base.addMessage("")
  }

  signUp(){
    this.auth.signUp(this.email, this.password).then(
      ()=>this.auth.sendVerificationEmail()
    ).catch(
      (e)=>console.log(e)
    )
  }

  validUser(){
    return false
  }
}
