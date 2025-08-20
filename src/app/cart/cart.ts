import { Component } from '@angular/core';
import { CartService } from '../service/cart-service';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe,RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  constructor(public cartService:CartService){
    

  }

  confirmCheckout() {
  alert('🎉 Thank you for your purchase!\n\nTotal: ' + this.cartService.getCartTotal());
  this.cartService.clearCart(); // implement this in your service
}


}
