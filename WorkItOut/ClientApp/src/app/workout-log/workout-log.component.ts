import { Component } from '@angular/core';

@Component({
    selector: 'app-workout-log',
    templateUrl: './workout-log.component.html',
    styleUrls: ['./workout-log.component.css']
})
/** workout-log component*/
export class WorkoutLogComponent {

    workoutlog = {
        weight: 0,
        timeOfWorkout : 0,
        reps : 0,
        sets: 0,
        howDoYouFeel: "",
        
    }

    /** workout-log ctor */
    constructor() {

    }

    WorkoutLog() {


    }
}

