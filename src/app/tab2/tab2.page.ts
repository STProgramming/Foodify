import { Component, OnInit } from '@angular/core';
import { Product } from '../services/cart.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  cart: Product[] = [];
  total: any;

  constructor(private cartService: CartService) {}

  ngOnInit(){
    this.cart = this.cartService.getCart();
  }

  decreaseCartItem(product){
    this.cartService.decreaseProduct(product);
  }

  increaseCartItem(product){
    this.cartService.addProduct(product);
  }

  removeCartItem(product){
    this.cartService.removeProduct(product);
  }

  getTotal(){
    this.total = this.cart.reduce((i , j) => i + j.price * j.amount, 0);
  }
}
