import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private router: Router, private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  redirectLogin(){
    this.router.navigateByUrl('tabs/tab3');
  }

  async openPopover(ev: any) {
    const modal = await this.popoverCtrl.create({
      component: LanguageSelectorComponent,
      cssClass: 'pop-over-custom',
    });
    await modal.present();
  }
}
