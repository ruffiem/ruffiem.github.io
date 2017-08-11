import { ContentModule } from '../content/content.module';
import { HeaderModule } from '../header/header.module';
import { NgModule } from '@angular/core';

import { SpaComponent } from './spa.component';

@NgModule({
  imports: [HeaderModule, ContentModule],
  exports: [],
  declarations: [SpaComponent],
  providers: [],
})
export class SpaModule { }
