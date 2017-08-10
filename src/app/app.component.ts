import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { MenuService } from './shared/service/menu.service';
@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  <app-content></app-content>`,
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(title: Title, translate: TranslateService, public menu: MenuService) {
    translate.get('APP.NAME').subscribe(name => title.setTitle(name));
  }
}
