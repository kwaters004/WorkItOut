import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-workout-detail',
    templateUrl: './workout-detail.component.html',
    styleUrls: ['./workout-detail.component.css']
})
/** workout-detail component*/
export class WorkoutDetailComponent {
/** workout-detail ctor */

  @Input() wrkout;

  sh: boolean = false;

    constructor() {

    }

  showHide() {
    if (this.sh)
    { this.sh = false; return; }
    this.sh = true;
  }
}
