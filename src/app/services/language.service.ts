import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';

const LNG_KEY = 'SELECTED_LANGUAGE';

@Injectable({
  providedIn: 'root'
})

export class LanguageService {
  selected = '';

  constructor(private translate: TranslateService, private storage: Storage) { }

  setInitialAppLanguage() {
    const language = 'it';
    this.translate.setDefaultLang(language);

    this.storage.get(LNG_KEY).then(val => {
      if (val) {
        this.setLanguage(val);
        this.selected = val;
      }
    });
  }

  getLanguage() {
    return [
      {text: 'English', value: 'en', img: 'assets/icon/en.png' },
      {text: 'Italiano', value: 'it', img: 'assets/icon/it.png' },
    ];
  }

  setLanguage(lng){
    this.translate.use(lng);
    this.selected = lng;
    this.storage.set(LNG_KEY, lng);
  }
}
