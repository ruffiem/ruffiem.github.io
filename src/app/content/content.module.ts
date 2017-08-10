import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ContentComponent } from './content.component';

@NgModule({
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
  exports: [ContentComponent],
  declarations: [ContentComponent],
  providers: [],
})
export class ContentModule { }
