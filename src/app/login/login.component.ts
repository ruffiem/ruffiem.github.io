import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              translate: TranslateService,
              meta: MetaService) {
    translate.get('LOGIN.CUSTOMER').subscribe(name => {
      meta.setTitle(name);
      meta.setTag('twitter:title', name);
    });
    meta.setTag('description', '');
    meta.setTag('twitter:description', '');
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      pass: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log('submit');
  }
}
