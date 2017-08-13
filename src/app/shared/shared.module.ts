import { Http, HttpModule } from '@angular/http';
import { MailService } from './services/mail.service';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MdIconModule, MdButtonModule, MdRippleModule, MdInputModule, MdProgressSpinnerModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    MdButtonModule,
    MdIconModule,
    MdRippleModule,
    MdInputModule,
    MdProgressSpinnerModule,
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
    CommonModule,
    RouterModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MailService]
})
export class SharedModule { }
