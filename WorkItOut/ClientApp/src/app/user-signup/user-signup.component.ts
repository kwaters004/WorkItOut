import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserapiService } from '../userapi.service';
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
        private route: Router,
        private userapi: UserapiService
    ) {
        
    }

    AddUser() {
        debugger;
        this.userapi.AddUser(this.signup);
        this.route.navigateByUrl('/profile');

    }
}
