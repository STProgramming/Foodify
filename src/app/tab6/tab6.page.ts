import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../services/cart.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page implements OnInit {
  products: Product[] = [];
  public deliveryForm: FormGroup;

  constructor(private cartService: CartService) {
    this.products = this.cartService.getCart();
   }

  ngOnInit() {
    this.deliveryForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      telephone: new FormControl('', [Validators.required, Validators.pattern(/(7|8|9)\d{9}/)]),
      city: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      clock: new FormControl('', Validators.required)
    });
  }

}
