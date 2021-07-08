import { Component, Input } from '@angular/core';
import { WorkoutapiService } from '../workoutapi.service';


@Component({
    selector: 'app-add-workout',
    templateUrl: './add-workout.component.html',
    styleUrls: ['./add-workout.component.css']
})
/** add-workout component*/
export class AddWorkoutComponent {
/** add-workout ctor */
  workout = {
    workoutname: "",
    recommendedReps: 0,
    recommendedSets: 0,
    recommendedDuration: 0,
    equipment: "",
    category:"",
    timeExercised: false,
    musclegroups: ""
  }

  @Input() name = "";
  constructor(private workoutapi: WorkoutapiService  ) {}

  AddWorkout() {
      debugger;
    this.workoutapi.AddWorkout(this.workout)
  }
}
