import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Tab4PageRoutingModule } from './tab4-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { Tab4Page } from './tab4.page';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab4PageRoutingModule,
    TranslateModule
  ],
  declarations: [Tab4Page, LanguageSelectorComponent]
})
export class Tab4PageModule {}
