import { Component,EventEmitter,Input, Output } from '@angular/core';
import { JsonPipe,CurrencyPipe } from '@angular/common';
import { toKHRPipe } from '../custom-pipes/to-khr-pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [JsonPipe,CurrencyPipe,toKHRPipe,RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  @Input() product:any
  @Output() onAddToCart:any = new EventEmitter<any>()

  addToCart(product:any){
    this.onAddToCart.emit(product);

  }
}
