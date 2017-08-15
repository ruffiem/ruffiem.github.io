import { HttpResponse } from '@angular/common/http/src/response';
import { MailFormat } from '../shared/models/mail.model';
import { MailService } from '../shared/services/mail.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { CONFIG } from '../app.config';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-content',
  templateUrl: 'content.component.html',
  styleUrls: ['content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ContentComponent implements OnInit {

  contactForm: FormGroup;
  maxMessage: number;
  minMessage: number;
  isOnSubmit: boolean;
  isSuccess: boolean;
  year: number;

  @ViewChild('scrollInvite') scrollInvite: ElementRef;

  @HostListener('scroll', ['$event'])
  removeScrollInvite(event: Event) {
    if (event.target['scrollTop'] > 16) {
      this.renderer.setProperty(this.scrollInvite.nativeElement, 'hidden', true);
    } else {
      this.renderer.removeAttribute(this.scrollInvite.nativeElement, 'hidden');
    }
  }

  constructor(private fb: FormBuilder,
              private mail: MailService,
              private renderer: Renderer2,
              translate: TranslateService,
              meta: MetaService) {
    this.minMessage = 20;
    this.maxMessage = 200;
    this.isOnSubmit = false;
    this.isSuccess = false;
    this.year = new Date().getFullYear();

    translate.get('APP.TITLE').subscribe(name => {
      meta.setTitle(name);
      meta.setTag('twitter:title', name);
    });
    translate.get('APP.DESCRIPTION').subscribe(desc => {
      meta.setTag('description', desc);
      meta.setTag('twitter:description', desc);
    });
    translate.get('APP.KEYWORDS').subscribe(keywords => meta.setTag('keywords', keywords));
  }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      message: ['', [Validators.required, Validators.minLength(this.minMessage), Validators.maxLength(this.maxMessage)]]
    });
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
      });
  }
}
