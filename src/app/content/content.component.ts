import { HttpResponse } from '@angular/common/http/src/response';
import { MailFormat } from '../shared/models/mail.model';
import { MailService } from '../shared/services/mail.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, HostListener, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { CONFIG } from '../app.config';

@Component({
  selector: 'app-content',
  templateUrl: 'content.component.html',
  styleUrls: ['content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ContentComponent implements OnInit {

  contactForm: FormGroup;
  scrollEvent: Event;
  maxMessage: number;
  minMessage: number;
  isOnSubmit: boolean;
  isSuccess: boolean;
  year: number;

  @HostListener('scroll', ['$event'])
  onScroll(event: Event) {
    this.scrollEvent = event;
  }

  constructor(private fb: FormBuilder,
              private title: Title,
              private translate: TranslateService,
              private mailService: MailService,
              private ref: ChangeDetectorRef) {
    this.scrollEvent = null;
    this.minMessage = 20;
    this.maxMessage = 200;
    this.isOnSubmit = false;
    this.isSuccess = false;
    this.year = new Date().getFullYear();
  }

  ngOnInit() {
    this.translate.get('APP.TITLE').subscribe(title => this.title.setTitle(title));

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(this.minMessage), Validators.maxLength(this.maxMessage)]]
    });
  }

  onSubmit() {
    this.isOnSubmit = true;

    const formatted = {
      to: CONFIG.EMAIL,
      from: this.contactForm.controls['email'].value,
      name: this.contactForm.controls['name'].value,
      message: this.contactForm.controls['message'].value
    };

    this.mailService.send(formatted)
      .subscribe((response: any) => {
        this.isOnSubmit = false;
        if (response._body === '1') {
          this.isSuccess = true;
          this.contactForm.disable();
          this.contactForm.markAsPristine();
        }
      });
  }
}
