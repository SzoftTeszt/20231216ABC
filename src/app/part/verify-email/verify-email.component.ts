import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent {
  email:any;

  constructor(private auth:AuthService){
    this.auth.getLoggedUser().subscribe(
      (u)=>this.email=u?.email
    )
  }

  sendVerificationEmail(){
    this.auth.sendVerificationEmail()
  }


}
