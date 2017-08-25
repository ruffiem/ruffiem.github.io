import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content.component';

@NgModule({
  imports: [SharedModule],
  exports: [ContentComponent],
  declarations: [ContentComponent],
  providers: [],
})
export class ContentModule { }
