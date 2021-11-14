import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Tab6PageRoutingModule } from './tab6-routing.module';
import { Tab6Page } from './tab6.page';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    Tab6PageRoutingModule
  ],
  declarations: [
    Tab6Page,
    Validators
  ]
})
export class Tab6PageModule { }
