import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService, Product } from '../services/cart.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  prodetail: Product;
  id: any;
  constructor(
    private router: ActivatedRoute,
    private cartService: CartService,
    private route: Router
  ) {
    this.router.queryParams.subscribe((params) => {
      if (params && params.id) {
        this.id = JSON.parse(params.id);
        if (this.id !== params || params.id) {
          this.ngOnInit();
        }
      }
    });
  }

  ngOnInit() {
    this.prodetail = this.cartService.getSingleProduct(this.id);
  }

  addCart(product) {
    this.cartService.addProduct(product);
  }

  redirectToHome() {
    this.route.navigateByUrl('tabs/tab1');
  }
}
