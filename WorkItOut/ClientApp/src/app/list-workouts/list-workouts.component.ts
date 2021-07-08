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



  workouts = [
    {
      workoutname: 'push-up',
      recommendedReps: '10',
      recommendedSets: '4',
    },
    {
      workoutname: 'pull-up',
      recommendedReps: '5',
      recommendedSets: '3',
    }
  ]

	constructor(private http: HttpClient) {
	}



  ngOnInit() {

    

  }

  showDetail() {

    alert('show detail');

  }

}
