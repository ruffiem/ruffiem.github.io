import { ContentModule } from './content/content.module';
import { HeaderModule } from './header/header.module';
import { NgModule } from '@angular/core';

import { SpaComponent } from './spa.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule, HeaderModule, ContentModule],
  exports: [],
  declarations: [SpaComponent],
  providers: [],
})
export class SpaModule { }
