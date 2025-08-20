import { Component } from '@angular/core';
import { Slide } from '../slide/slide';
import { ProductCard } from '../product-card/product-card';
import { CartService } from '../service/cart-service';
import { ProductService } from '../service/product-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ Slide,
            ProductCard,RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home { 
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
  // home.component.ts
categories = [
  { name: 'Men\'s Clothing', image: '/assets/cat-men.png' },
  { name: 'Women\'s Clothing', image: '/assets/cat-women.png' },
  { name: 'Kids', image: '/assets/cat-kids.png' },
  { name: 'Bags', image: '/assets/cat-bag.png' },
  { name: 'Shoes', image: '/assets/cat-shoes.png' },
  { name: 'Accessories', image: '/assets/cat-accessories.png' },
];

reviews = [
  { name: 'Alice', comment: 'Great products and fast delivery!', avatar: '/assets/user1.jpg' },
  { name: 'Bob', comment: 'The quality is amazing for the price.', avatar: '/assets/user2.jpg' },
  { name: 'Sophy', comment: 'I love shopping here every season.', avatar: '/assets/user3.jpg' }
];



 

}
