import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scenario',
  templateUrl: 'scenario.component.html',
  styleUrls: ['scenario.component.scss']
})

export class ScenarioComponent {
  @Input() case: string;
}
