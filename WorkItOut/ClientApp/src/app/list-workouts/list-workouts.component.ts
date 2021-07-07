import { Component } from '@angular/core';
import { WorkoutapiService } from '../workoutapi.service';

@Component({
    selector: 'app-list-workouts',
    templateUrl: './list-workouts.component.html',
    styleUrls: ['./list-workouts.component.css']
})
/** list-workouts component*/
export class ListWorkoutsComponent {
/** list-workouts ctor */

  workouts = null;
  constructor(
    private workoutService: WorkoutapiService,
    private thisroute: ActivatedRoute
  ) {

      

  }



  ngOnInit() {

    

  }
   


}
