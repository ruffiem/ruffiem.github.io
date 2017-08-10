import { BehaviorSubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {
  status$: BehaviorSubject<boolean>;

  constructor() {
    this.status$ = new BehaviorSubject(false);
  }

  toggle() {
    this.status$.next(!this.status$.getValue());
  }

}
