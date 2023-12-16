import { Component } from '@angular/core';
import { BaseService } from '../../services/base.service';
import { map } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { SingupComponent } from '../singup/singup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  messages:any

  showError=false
  errorMessage=""

  constructor(private base:BaseService, private auth:AuthService){
    this.base.getMessages().snapshotChanges().pipe(
      map(
        (ch)=> ch.map(
          (c)=>({key:c.payload.key, ...c.payload.val()})
        )
      )
    ).subscribe({
     next: (a)=>{this.messages=a; this.showError=false},
     error: (e)=>{ this.showError=true; this.errorMessage="Kérlek jelentkezz be!"}
      
    })
   
  }


  addMessage(){
    this.base.addMessage("")
  }
  addClaims(){
    this.auth.setCustomClaims("","")
  }
}
