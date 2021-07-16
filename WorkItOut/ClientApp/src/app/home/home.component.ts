import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkoutapiService } from '../workoutapi.service';
import { Directive } from '@angular/core';
import { UserapiService } from '../userapi.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
})
@Directive({})
export class HomeComponent implements OnInit {

	user: any = {
		email: "",
	}
	checkingpassword: FormGroup;
	passwordWarn = "";


	constructor(
		private workoutService: WorkoutapiService,
		private userapi: UserapiService, private route: Router) {
		
		this.checkingpassword = fb.group([
			'password' , [null, Validators.compose([Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/)])],
		]);
	}

	ngOnInit() {
		// this is to initialize the sql connection.
		//Then it doesn't lag when returning data

	
		
		//this.userapi.clickLogin(this.user);
		        this.loggedOut();
	}

	UserLogIn() {
		this.passwordWarn = "";
    }

	clickLogin() {
        if (this.checkingpassword.value == "" || this.checkingpassword.invalid) {
			this.passwordWarn = "password must be at least 8 characters long contain a number and an uppercase letter";
			return;
        }
		this.userapi.clickLogin(this.user);
		this.userapi.User = this.user;
		this.route.navigateByUrl('/profile');
		this.userapi.CheckLoggedIn();
	}


	loggedOut() {

		if (this.userapi.User != null) {
			this.route.navigateByUrl("/profile");
		}
	}

}
