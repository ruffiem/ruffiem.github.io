import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

import * as forEach from 'lodash/forEach';

@Component({
  selector: 'app-scenario',
  templateUrl: 'scenario.component.html',
  styleUrls: ['scenario.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ScenarioComponent implements OnInit, OnChanges {

  @Input() scrollEvent: Event;

  constructor(private el: ElementRef,
              private renderer: Renderer2) { }

  ngOnInit() {
    this.moveObjects();
  }

  ngOnChanges(changes: SimpleChanges) {
    const spy = changes.scrollEvent || null;
    if (spy.previousValue && this.isInViewport()) {
      this.moveObjects();
    }
  }

  moveObjects() {
    const movableObjects = document.querySelectorAll('.movable-object');
    forEach(movableObjects, movableObject => {
      const data = this.getDataValue(movableObject);
      this.renderer.setAttribute(movableObject, 'style', `top:${data.y.start}px;left:${data.x.start}px`);
    });
  }

  getDataValue(object: HTMLElement) {
    return {
      x: {
        start: object.getAttribute('data-x-start'),
        end: object.getAttribute('data-x-end')
      },
      y: {
        start: object.getAttribute('data-y-start'),
        end: object.getAttribute('data-y-end')
      }
    };
  }

  isInViewport(): boolean {
    if (this.scrollEvent && this.scrollEvent.target) {
      return (this.el.nativeElement.clientHeight - this.scrollEvent.target['scrollTop']) > 0;
    }

    return true;
  }
}
