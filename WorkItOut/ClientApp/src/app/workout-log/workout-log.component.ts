import { Component, EventEmitter, Input, Output } from '@angular/core';
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

    

    @Input() userId;
    @Input() workoutId;
    @Output() hideLog: EventEmitter<any> = new EventEmitter<any>();

    $isLoggedIn = new EventEmitter();

/** workout-log ctor */

    constructor(private userapi: UserapiService) { }
   

    WorkoutLog() {

        this.HideLog();
        this.workoutlog.userId = this.userId;
        this.workoutlog.workoutId = this.workoutId; 

        let newDate = new Date();

        //this is saving the date and time of UTC
        this.workoutlog.timeOfWorkout = newDate.toISOString();

        

        this.userapi.WorkoutLog(this.workoutlog)
    }


    HideLog() {
        this.hideLog.emit(null);
    }

    CancelLog() {
        this.HideLog();
	}
}

