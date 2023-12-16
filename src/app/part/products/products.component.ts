import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  @Input() aktualisTermekek:any

  constructor(private cartService:CartService){

  }

  addProduct(product:any, db:any){
      let body:any={}
      body.key=product.key
      body.price=product.ar
      body.qty=Number(db)
      this.cartService.addProduct(body)

  }
}
