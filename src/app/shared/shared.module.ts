import { ScenarioModule } from './components/scenario/scenario.module';
import { FormatPipe } from './pipes/format.pipe';
import { SpyScrollDirective } from './directives/spyscroll.directive';
import { Http, HttpModule } from '@angular/http';
import { MailService } from './services/mail.service';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  MdIconModule,
  MdButtonModule,
  MdRippleModule,
  MdInputModule,
  MdProgressSpinnerModule,
  MdMenuModule,
  MdTabsModule
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    MdButtonModule,
    MdIconModule,
    MdRippleModule,
    MdInputModule,
    MdProgressSpinnerModule,
    MdMenuModule,
    MdTabsModule,
    CommonModule,
    RouterModule,
    HttpModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    ScenarioModule
  ],
  exports: [
    MdButtonModule,
    MdIconModule,
    MdRippleModule,
    MdInputModule,
    MdProgressSpinnerModule,
    MdMenuModule,
    MdTabsModule,
    CommonModule,
    RouterModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    SpyScrollDirective,
    FormatPipe,
    ScenarioModule
  ],
  declarations: [SpyScrollDirective, FormatPipe],
  providers: [MailService]
})
export class SharedModule { }
