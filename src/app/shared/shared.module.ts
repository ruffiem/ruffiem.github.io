import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MdIconModule, MdButtonModule, MdRippleModule, MdInputModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    MdButtonModule,
    MdIconModule,
    MdRippleModule,
    MdInputModule,
    CommonModule,
    RouterModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MdButtonModule,
    MdIconModule,
    MdRippleModule,
    MdInputModule,
    CommonModule,
    RouterModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
