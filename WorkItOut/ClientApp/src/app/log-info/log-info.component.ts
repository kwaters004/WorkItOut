import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkoutapiService } from '../workoutapi.service';

@Component({
    selector: 'app-log-info',
    templateUrl: './log-info.component.html',
    styleUrls: ['./log-info.component.css']
})
/** log-info component*/
export class LogInfoComponent implements OnInit{
    @Input() aLog: any;

    dateStr = null;
    theWorkout = null;

/** log-info ctor */
    constructor(private router: Router, private workoutapi: WorkoutapiService) {

    }

    ngOnInit() {
        this.GetDateStr();
        this.GetWorkoutInfo();
	}
    
    GetDateStr() {
        let newStr = this.aLog.timeOfWorkout.toString();
        this.dateStr = newStr.substring(5, 7) + "-" + newStr.substring(8, 10) + "-" + newStr.substring(0, 4);
    }

    GoToLogPage() {
        this.router.navigate(['yourlog', this.aLog.workoutlogId]);
	}

    GetWorkoutInfo() {

        for (let i = 0; i < this.workoutapi.workouts.length; i++) {
            if (this.workoutapi.workouts[i].workoutId == this.aLog.workoutId) {
                this.theWorkout = this.workoutapi.workouts[i];
			}
        }

	}
}
