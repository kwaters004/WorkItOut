import { HttpClient } from '@angular/common/http';
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


	constructor(private http: HttpClient, private workoutService: WorkoutapiService) {
        this.workoutService.GetWorkouts();
    }



  ngOnInit() {

    

  }

  showDetail() {

    alert('show detail');

  }

}
