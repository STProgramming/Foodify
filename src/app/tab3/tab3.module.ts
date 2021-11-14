import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { TranslateModule } from '@ngx-translate/core';
import { Tab3PageRoutingModule } from './tab3-routing.module';
import { Validators } from '@angular/forms';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    Tab3PageRoutingModule,
    TranslateModule 
  ],
  declarations: [
    Tab3Page,
    Validators
  ]
})
export class Tab3PageModule {}
