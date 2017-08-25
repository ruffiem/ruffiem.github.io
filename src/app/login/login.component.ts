import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  passForm: FormGroup;
  showPassForm: boolean;
  subscriptions: Subscription[];

  constructor(private fb: FormBuilder,
              private router: Router,
              private translate: TranslateService,
              private meta: MetaService) {
    this.onLangChange();
    this.showPassForm = false;
    this.subscriptions = [];
  }

  ngOnInit() {
    this.subscriptions.push(
      this.translate.onLangChange.subscribe(lang => this.onLangChange())
    );
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      pass: ['', Validators.required]
    });
    this.passForm = this.fb.group({
      user: ['', Validators.required]
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onSubmit() {
    if (this.loginForm.controls['user'].value === 'RSD0') {
      this.router.navigate(['/customer']);
    }
  }

  onSubmitPass() {
    console.log('submit pass lost');
  }

  onLangChange() {
    this.translate.get('LOGIN.TITLE').subscribe(name => {
      this.meta.setTitle(name);
      this.meta.setTag('twitter:title', name);
    });
    this.meta.setTag('description', '');
    this.meta.setTag('twitter:description', '');
  }
}
