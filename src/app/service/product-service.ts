import { Injectable } from '@angular/core';
declare const axios:any;
declare const $:any;

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(){
    
    let ng_this:this =this;
    $.LoadingOverlay("show");

    axios.get('https://fakestoreapi.com/products')
  .then(function (response:any) {
    // handle success
    ng_this.products = response.data;
    $.LoadingOverlay("hide");
  })
  .catch(function (error:any) {
    // handle error
    console.log(error);
  })
  }

  private products: any = [
  ]

  getProducts(){
    return this.products;
  }

  
}
