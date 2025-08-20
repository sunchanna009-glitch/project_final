import { Component } from '@angular/core';
import { CartService } from '../service/cart-service';
import { ProductService } from '../service/product-service';
import { Slide } from '../slide/slide';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-page',
  imports: [Slide,ProductCard],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css'
})
export class ProductPage {
  constructor(public cartService:CartService,public productService:ProductService){}
    //  ngOnInit(){
    //   let cart:any = localStorage.getItem('cart_item') ?? '[]';
    //   this.cart_item = JSON.parse(cart);
    // }
    protected title = 'lab4';
     cart_item :any[]=[];
  
  
    addToCart(product:any){
      this.cartService.addToCart(product);
      
  
    }
  
  

}
