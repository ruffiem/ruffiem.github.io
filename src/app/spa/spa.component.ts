import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  template: `
    <app-header class="app-header"></app-header>
    <app-content
      spyScroll
      spyWhat="animate-content"
      doWhat="animate">
    </app-content>`,
  styleUrls: ['spa.component.scss']
})

export class SpaComponent {
  @ViewChild('appHeader') appHeader: ElementRef;
}
