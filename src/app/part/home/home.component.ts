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
  products:any

  showError=false
  errorMessage=""

  aktualisTermekek:any

  constructor(private base:BaseService, private auth:AuthService){
    // this.base.getMessages().snapshotChanges().pipe(
    //   map(
    //     (ch)=> ch.map(
    //       (c)=>({key:c.payload.key, ...c.payload.val()})
    //     )
    //   )
    // ).subscribe({
    //  next: (a)=>{this.messages=a; this.showError=false},
    //  error: (e)=>{ this.showError=true; this.errorMessage="Kérlek jelentkezz be!"}      
    // })
    
    this.base.getProducts().subscribe(
      (res)=>{
        this.products=res;
        this.aktualisTermekek=this.refectorData('BBQ')
        console.log(this.products)
      }
    )

  }

  refectorData(kat:any){
    let ptomb=[]
    let products=this.products[kat]
    for (const key in products) {
        
        let element = products[key];
        element.key=key
        ptomb.push(element)
     }
     return ptomb
  }

  kategoriaValtas(event:any){   
     this.aktualisTermekek=this.refectorData(event)
  }





  addMessage(){
    this.base.addMessage("")
  }
  addClaims(){
    this.auth.setCustomClaims("","")
  }
}
