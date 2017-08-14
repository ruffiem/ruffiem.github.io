import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video',
  template: `
  <video autoplay loop muted preload="auto">
    <source [src]="source" type="video/mp4">
  </video>`,
  styleUrls: ['video.component.scss']
})

export class VideoComponent {

  @Input() source: string;

}
