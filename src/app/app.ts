import { Component,OnInit } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { JsonPipe,CurrencyPipe } from '@angular/common';
import { Footer } from './footer/footer';
import { toKHRPipe} from "./custom-pipes/to-khr-pipe"
import { Cart } from './cart/cart';
import { Home } from './home/home';
import { ReactiveFormsModule } from '@angular/forms';
import { Contact } from './contact/contact';
import { CartService } from './service/cart-service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    Footer,
    Cart,
    Home,
    ReactiveFormsModule,
    JsonPipe,
    CurrencyPipe,
    toKHRPipe,
    RouterLink,
    Contact,
    ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
constructor(public cartService:CartService){

}
}
