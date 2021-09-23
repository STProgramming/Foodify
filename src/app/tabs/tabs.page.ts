import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthGuard } from '../guards/auth.guard';
import { CartService } from '../services/cart.service';
import { Tab3Page } from '../tab3/tab3.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage implements OnInit {
  auth;
  cartItemCount: BehaviorSubject<number>;
  constructor(
    private guard: AuthGuard,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.cartItemCount = this.cartService.getCartItemCount();
    this.auth = !!+localStorage.getItem('authenticated');
  }

  checkLogin(): boolean {
    return (this.router &&
      this.router.url &&
      this.router.url.includes('tab4')) ||
      this.router.url.includes('tab3') ||
      this.router.url.includes('tab5') ||
      this.router.url.includes('tab2')
      ? false
      : true;
  }
}
