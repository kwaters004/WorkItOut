import { Component, OnInit } from '@angular/core';
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
		private userapi: UserapiService, private route: Router) {
		

	}

	ngOnInit() {
		// this is to initialize the sql connection.
		//Then it doesn't lag when returning data

	
		
		this.userapi.clickLogin(this.user);
		/*        this.loggedOut();*/
	}


	clickLogin() {

		this.userapi.clickLogin(this.user);
		this.route.navigateByUrl('/profile');
		this.userapi.CheckLoggedIn();
	}


	loggedOut() {

		if (this.userapi.User.userId != null) {
			this.route.navigateByUrl("/profile");
		}
	}

}
