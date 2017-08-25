import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import * as forEach from 'lodash/forEach';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[spyScroll]'
})
export class SpyScrollDirective implements OnInit {

  @Input() spyWhat: string;
  @Input() spyDo: string;
  @Input() spyLoop: boolean;
  @Input() spyTrigger: number;

  @HostListener('scroll', [])
  onScroll() {
    const elements = document.querySelectorAll(`.${this.spyWhat}`);
    const invite = document.querySelector('.scroll-invite');

    forEach(elements, element => {
      if (this.isInViewport(element)) {
        this.renderer.addClass(element, this.spyDo);
        this.renderer.setProperty(invite, 'hidden', true);
      } else if (!this.isInViewport(element) && this.spyLoop) {
        this.renderer.removeClass(element, this.spyDo);
      }
    });
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.spyTrigger = 1.5;
  }

  ngOnInit() {
    this.onScroll();
  }

  isInViewport(element: HTMLElement): boolean {
    const fromTop = this.el.nativeElement['scrollTop'];
    const fromTopMax = fromTop + (window.innerHeight / this.spyTrigger);

    return element.offsetTop < fromTopMax && (element.offsetTop + element.clientHeight) > fromTop;
  }
}
