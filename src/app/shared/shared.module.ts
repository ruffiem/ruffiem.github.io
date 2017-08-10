import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MdIconModule, MdButtonModule, MdRippleModule, MdInputModule } from '@angular/material';
import { MenuService } from './service/menu.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    MdButtonModule,
    MdIconModule,
    MdRippleModule,
    MdInputModule,
    CommonModule,
    BrowserAnimationsModule,
    TranslateModule
  ],
  exports: [
    MdButtonModule,
    MdIconModule,
    MdRippleModule,
    MdInputModule,
    CommonModule,
    BrowserAnimationsModule,
    TranslateModule
  ],
  declarations: [],
  providers: [
    MenuService
  ],
})
export class SharedModule { }
