import { Component } from '@angular/core';
import { WorkoutapiService } from '../workoutapi.service';

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.css']
})
/** user-login component*/
export class UserLoginComponent {
    /** user-login ctor */
    constructor(private workoutapi: WorkoutapiService) {

    }

    AddUser() {
        this.workoutapi.AddUser(this.AddUser)
    }
}