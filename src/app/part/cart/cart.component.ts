import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  kosar:any
  constructor(private cartService:CartService){
    
    this.cartService.getCart().subscribe(
      (res)=> this.kosar=res
    )
  }

}
