import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
email:any;
constructor(private auth:AuthService){
  this.auth.getLoggedUser().subscribe(
    (u)=>this.email=u?.email
  )
}
forgotPassword(){
  this.auth.forgotPassword(this.email)
}
  
}
