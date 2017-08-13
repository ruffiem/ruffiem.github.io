import { Component, OnInit } from '@angular/core';
import { CONFIG } from '../app.config';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})

export class HeaderComponent implements OnInit {

  websiteUrl: string;
  websitePhone: string;

  constructor() {
    this.websiteUrl = CONFIG.URL;
    this.websitePhone = CONFIG.PHONE;
  }

  ngOnInit() {
  }
}
