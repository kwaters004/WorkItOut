import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { WorkoutapiService } from '../workoutapi.service';

@Component({
    selector: 'app-user-signup',
    templateUrl: './user-signup.component.html',
    styleUrls: ['./user-signup.component.css']
})
/** user-signup component*/
export class UserSignupComponent {
/** user-signup ctor */
    signup = {
        firstname: "",
        lastname: "",
        dob: 0, 
        initialWeight: 0,
        email: "",
        userName: "",
        height: 0,
        gender: ""
    }

    @Input() firstname = "";
    constructor(
        private workoutapi: WorkoutapiService,
        private route: Router
    ) {
        
    }

    AddUser() {
        debugger;
        this.workoutapi.AddUser = this.AddUser;
        this.route.navigateByUrl('/login');
    }
}
