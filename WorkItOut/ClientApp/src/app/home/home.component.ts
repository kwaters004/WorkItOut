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
		password: "",
	}
/*	checkingpassword: FormGroup;*/
	passwordWarn = "";


	constructor(
		private workoutService: WorkoutapiService,
		private userapi: UserapiService, private route: Router,
		private fb: FormBuilder	) {
		
		//this.checkingpassword = fb.group([
		//	'password' , [null, Validators.compose([Validators.required])],
		//]);
	}

	ngOnInit() {
		// this is to initialize the sql connection.
		//Then it doesn't lag when returning data

	
		
		//this.userapi.clickLogin(this.user);
		this.loggedOut();
		this.user = this.userapi.User;
	}

	UserLogIn() {
		this.passwordWarn = "";
    }

	clickLogin() {
        if (this.user.password == "") {
			this.passwordWarn = "Please enter a password";
			return;
        }
		this.userapi.clickLogin(this.user);
		this.userapi.User = this.user;
		this.route.navigateByUrl('/profile');
		this.userapi.CheckLoggedIn();
	}


	loggedOut() {

		if (this.userapi.User.password != null) {
			this.route.navigateByUrl("/profile");
		}
	}

}
