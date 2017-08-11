import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <app-header></app-header>
    <app-content></app-content>`,
  styleUrls: ['spa.component.scss']
})

export class SpaComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
