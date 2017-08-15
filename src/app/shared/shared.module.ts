import { SpyScrollDirective } from './directives/spyscroll.directive';
import { Http, HttpModule } from '@angular/http';
import { MailService } from './services/mail.service';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MdIconModule, MdButtonModule, MdRippleModule, MdInputModule, MdProgressSpinnerModule, MdMenuModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    MdButtonModule,
    MdIconModule,
    MdRippleModule,
    MdInputModule,
    MdProgressSpinnerModule,
    MdMenuModule,
    CommonModule,
    RouterModule,
    HttpModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MdButtonModule,
    MdIconModule,
    MdRippleModule,
    MdInputModule,
    MdProgressSpinnerModule,
    MdMenuModule,
    CommonModule,
    RouterModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    SpyScrollDirective
  ],
  declarations: [SpyScrollDirective],
  providers: [MailService]
})
export class SharedModule { }
