import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

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

  constructor(private fb: FormBuilder) {
    this.minMessage = 20;
    this.maxMessage = 200;
    this.year = new Date().getFullYear();
  }

  ngOnInit() {
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
