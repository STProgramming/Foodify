import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent implements OnInit {
  languages = [];
  infoClose: string;
  constructor(
    private languageService: LanguageService,
    public popoverCtrl: PopoverController,
    private translate: TranslateService
  ) {
    this.infoClose = this.translate.instant('POPOVER');
  }

  ngOnInit() {
    this.languages = this.languageService.getLanguage();
  }

  setLang(language) {
    this.languageService.setLanguage(language);
  }

  close() {
    this.popoverCtrl.dismiss();
  }
}
