import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private title: Title, private translate: TranslateService) {
  }

  ngOnInit() {
    this.title.setTitle(this.translate.instant('LOGIN.CUSTOMER'));
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      pass: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log('submit');
  }
}
