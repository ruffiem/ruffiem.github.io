import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { MetaService } from '@ngx-meta/core';
import { Subscription } from 'rxjs/Subscription';
import { CONFIG } from '../../app.config';
import { MailFormat } from '../../shared/models/mail.model';
import { MailService } from '../../shared/services/mail.service';

@Component({
  selector: 'app-content',
  templateUrl: 'content.component.html',
  styleUrls: ['content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ContentComponent implements OnInit, OnDestroy {

  contactForm: FormGroup;
  maxMessage: number;
  minMessage: number;
  isOnSubmit: boolean;
  isSuccess: boolean;
  year: number;

  subscriptions: Subscription[];

  constructor(private fb: FormBuilder,
              private ref: ChangeDetectorRef,
              private mail: MailService,
              private renderer: Renderer2,
              private translate: TranslateService,
              private meta: MetaService) {
    this.onLangChange();
    this.minMessage = 20;
    this.maxMessage = 200;
    this.isOnSubmit = false;
    this.isSuccess = false;
    this.subscriptions = [];
    this.year = new Date().getFullYear();
  }

  ngOnInit() {
    this.subscriptions.push(
      this.translate.onLangChange.subscribe(translation => this.onLangChange())
    );
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      message: ['', [Validators.required, Validators.minLength(this.minMessage), Validators.maxLength(this.maxMessage)]]
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onSubmit() {
    this.isOnSubmit = true;

    const data: MailFormat = {
      to: CONFIG.EMAIL,
      from: this.contactForm.controls['email'].value,
      name: this.contactForm.controls['name'].value,
      company: this.contactForm.controls['company'].value,
      message: this.contactForm.controls['message'].value
    };

    this.mail.send(data)
      .subscribe((response: any) => {
        this.isOnSubmit = false;
        if (response._body === '1') {
          this.isSuccess = true;
          this.contactForm.disable();
          this.contactForm.markAsPristine();
        }
        this.ref.markForCheck();
      });
  }

  onLangChange() {
    this.translate.get('APP.TITLE').subscribe(name => {
      this.meta.setTitle(name);
      this.meta.setTag('twitter:title', name);
    });
    this.translate.get('APP.DESCRIPTION').subscribe(desc => {
      this.meta.setTag('description', desc);
      this.meta.setTag('twitter:description', desc);
    });
    this.translate.get('APP.KEYWORDS').subscribe(keywords => this.meta.setTag('keywords', keywords));
  }
}
