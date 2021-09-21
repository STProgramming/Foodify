import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService, Product } from '../services/cart.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnChanges {

  prodetail: Product;
  id: any;
  constructor(private router: ActivatedRoute, private cartService: CartService) {
    this.router.queryParams.subscribe((params) => { if (params && params.id) { this.id = JSON.parse(params.id); } });
  }
  
  ngOnChanges() {
    this.prodetail = this.cartService.getSingleProduct(this.id);
  }

  addCart() {
    this.cartService.addProduct(this.prodetail);
  }

  ngOnDestroy() {
    this.prodetail = null;
  }
}
