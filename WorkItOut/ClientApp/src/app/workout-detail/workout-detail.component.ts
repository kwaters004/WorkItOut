import { Component, Input } from '@angular/core';
import { WorkoutapiService } from '../workoutapi.service';

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
  shInput: boolean = false;

  constructor(
    private workoutapi: WorkoutapiService  ) {

    }

  showHide() {
    if (this.sh)
    { this.sh = false; return; }
    this.sh = true;
    }


    showHideEdit() {
        if (this.shInput) { this.shInput = false; return; }
        this.shInput = true;
    }


    EditWorkout(workout) {
        this.workoutapi.EditWorkout(workout);
        this.showHideEdit();
	}
    
}
