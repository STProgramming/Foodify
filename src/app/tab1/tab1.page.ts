import { CartService } from '../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  products = [];
  searchTerm: string;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.products = this.cartService.getProducts();
  }

  addToCart(product) {
    this.cartService.addProduct(product);
  }

  detailView(id: string) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        id: JSON.stringify(id),
      },
    };
    this.router.navigate(['/tabs/tab5'], navigationExtras);
  }
}
