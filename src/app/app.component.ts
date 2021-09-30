import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private router: Router, private languageService: LanguageService) {
    this.initializeApp();
  }

  initializeApp() {
    localStorage.removeItem('authenticated');
    this.router.navigateByUrl('tabs/tab4');
    this.languageService.setInitialAppLanguage();
  }
}
