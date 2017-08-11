import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-content',
  templateUrl: 'content.component.html',
  styleUrls: ['content.component.scss']
})

export class ContentComponent implements OnInit {

  contactForm: FormGroup;
  maxMessage: number;
  minMessage: number;
  year: number;

  constructor(private fb: FormBuilder, private title: Title, private translate: TranslateService) {
    this.minMessage = 20;
    this.maxMessage = 200;
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
    console.log(this.contactForm.value);
  }
}
