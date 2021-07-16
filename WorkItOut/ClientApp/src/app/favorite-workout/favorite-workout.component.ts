import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserapiService } from '../userapi.service';
import { WorkoutapiService } from '../workoutapi.service';

@Component({
    selector: 'app-favorite-workout',
    templateUrl: './favorite-workout.component.html',
    styleUrls: ['./favorite-workout.component.css']
})
/** favorite-workout component*/
export class FavoriteWorkoutComponent implements OnInit {
/** favorite-workout ctor */


    constructor(private userapi: UserapiService, private route: Router,
            private workoutapi: WorkoutapiService    ) {
        

    }


    ngOnInit() {
        if (this.userapi.User == null) {
            this.route.navigateByUrl('/');
		}


    }



}
