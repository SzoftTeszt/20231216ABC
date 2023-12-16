import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  coll=true
  user:any=null;
  isSuperAdmin=false
  constructor(private auth:AuthService, private router:Router){
    // this.getIsSuperAdmin()
    this.getIsSuperAdmin()
    
    this.auth.getLoggedUser().subscribe(
      (u)=>
        {
          this.user=u;
          // console.log("User:", this.user)
        }
    )
  }

  getIsSuperAdmin(){
    this.auth.getIsSuperAdmin().subscribe(
      (sadmin)=> {
        console.log("Jog frissült:", sadmin )
        this.isSuperAdmin=sadmin
      }
    )
  }

  signOut(){
    this.auth.signOut().then(
      ()=>this.router.navigate(['/home'])
    )
  }

}
