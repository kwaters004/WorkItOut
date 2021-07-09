import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WorkoutapiService } from '../workoutapi.service';
import { Directive } from '@angular/core';
import { UserapiService } from '../userapi.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
@Directive({})
export class HomeComponent {

    user: any = {
		email: "",
	}

    constructor(
        private workoutService: WorkoutapiService,
        private userservice: UserapiService, private route: Router) {

    }



    clickLogin() {
        this.userservice.clickLogin(this.user);
        debugger;
        
    }
}
