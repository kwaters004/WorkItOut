import { Component } from '@angular/core';
import { WorkoutapiService } from '../workoutapi.service';

@Component({
    selector: 'app-user-signup',
    templateUrl: './user-signup.component.html',
    styleUrls: ['./user-signup.component.css']
})
/** user-login component*/
export class UserSignupComponent {
    /** user-login ctor */
    constructor(private workoutapi: WorkoutapiService) {

    }

    AddUser() {
        this.workoutapi.AddUser(this.AddUser)
    }
}
