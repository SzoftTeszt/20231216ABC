import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  kosar:any=[]

  kosarBehaviorSub= new BehaviorSubject([])

  constructor() { }

  addProduct(body:any)
  {   
      let i= this.kosar.findIndex(
        (sor:any)=>sor.key==body.key
      )
      if (i<0) {
        this.kosar.push(body)
      }
      else {
        this.kosar[i].qty=body.qty
      }
      this.kosarBehaviorSub.next(this.kosar)
  }

  getCart(){
    return this.kosarBehaviorSub
  }
}
