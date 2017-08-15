import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import * as forEach from 'lodash/forEach';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[spyScroll]'
})
export class SpyScrollDirective implements OnInit {

  @Input() spyWhat: string;
  @Input() doWhat: string;

  offset: number;

  @HostListener('scroll', [])
  onScroll() {
    const elements = document.querySelectorAll(`.${this.spyWhat}`);

    forEach(elements, element => {
      if (this.isInViewport(element)) {
        this.renderer.addClass(element, this.doWhat);
      } else {
        this.renderer.removeClass(element, this.doWhat);
      }
    });
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.onScroll();
  }

  isInViewport(element: HTMLElement): boolean {
    const fromTop = this.el.nativeElement['scrollTop'];
    const fromTopMax = fromTop + (window.innerHeight / 1.5);

    return element.offsetTop < fromTopMax && (element.offsetTop + element.clientHeight) > fromTop;
  }
}
