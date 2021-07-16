import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'oidc-client';
import { UserapiService } from '../userapi.service';

@Component({
    selector: 'app-workout-log',
    templateUrl: './workout-log.component.html',
    styleUrls: ['./workout-log.component.css']
})
/** workout-log component*/
export class WorkoutLogComponent {

/*    workoutlog = null;*/

    workoutlog = {
        weight: 0,
        timeOfWorkout: null,
        reps : 0,
        sets: 0,
        howDoYouFeel: 0,
        workoutId: 0,
        userId: 0,
        
    }

    


    workoutId: number;
    @Output() hideLog: EventEmitter<any> = new EventEmitter<any>();

    $isLoggedIn = new EventEmitter();

/** workout-log ctor */

    constructor(private userapi: UserapiService,
        private router: Router,
        private route: ActivatedRoute    ) {
        if (!userapi.User) {
            this.CancelLog();
        }
        this.route.params.subscribe(params => {
            this.workoutId = parseInt(params.id);
            console.log(`Here is the workoutId: ${this.workoutId}`);
		})
    }
   

    WorkoutLog() {
        debugger;
        this.CancelLog();
        this.workoutlog.userId = this.userapi.User.userId;
        this.workoutlog.workoutId = this.workoutId; 

        let newDate = new Date();

        //this is saving the date and time of UTC
        this.workoutlog.timeOfWorkout = newDate.toISOString();





        
        debugger;

        this.userapi.WorkoutLog(this.workoutlog)
    }


    HideLog() {
        this.hideLog.emit(null);
    }

    CancelLog() {
        this.router.navigateByUrl('/');
	}
}

