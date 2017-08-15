import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CONFIG } from '../app.config';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent {

  websiteUrl: string;
  websitePhone: string;
  currentLang: string;

  constructor(public translate: TranslateService) {
    this.websiteUrl = CONFIG.URL;
    this.websitePhone = CONFIG.PHONE;
  }

  switchLang() {
    if (this.notCurrentLang() === 'fr') {
      this.translate.use('fr');
    } else {
      this.translate.use('en');
    }

    window.localStorage.setItem('lang', this.translate.currentLang);
  }

  notCurrentLang(): string {
    return this.translate.currentLang === 'fr' ? 'en' : 'fr';
  }
}
