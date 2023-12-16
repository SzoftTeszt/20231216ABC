import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent {
  email:string=""
  password:string=""

  constructor(private auth:AuthService,   
    private router:Router){}
  
    googleAuth(){
      this.auth.googleAuth()
      
    }

    signIn(){
      this.auth.signIn(this.email,this.password).then(
        ()=>this.router.navigate(['/users'])
      )
      .catch(
        (e)=>console.log(e)
      )
    }

    validUser(){
      return false
    }
}
