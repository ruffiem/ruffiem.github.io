import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  constructor(title: Title, translate: TranslateService) {
    translate.get('APP.NAME').subscribe(name => title.setTitle(name));
  }
}
