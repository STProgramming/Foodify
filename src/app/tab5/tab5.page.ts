import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService, Product } from '../services/cart.service';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

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
    private route: Router,
    private toastController: ToastController,
    private translate: TranslateService
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
    this.presentToastWithOptions(product);
  }

  redirectToHome() {
    this.route.navigateByUrl('tabs/tab1');
  }

  async presentToastWithOptions(product) {
    const headerTranslate: string = this.translate.instant('TOAST.title');
    const paragraphTranslate: string = this.translate.instant('TOAST.paragraph');
    const prod: Product = product;
    const prodNameTranlate: string = this.translate.instant(prod.name);
    const toast = await this.toastController.create({
      header: headerTranslate,
      message: paragraphTranslate + prodNameTranlate,
      position: 'middle',
      cssClass: 'toast-custom-class',
      buttons: [
        {
          text: 'OK!',
          icon: 'checkmark-done-outline',
          handler: () => {
            this.redirectToHome();
          }
        }
      ]
    });
    toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
