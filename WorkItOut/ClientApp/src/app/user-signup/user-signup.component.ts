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
	fnameWarn = "";
	lnameWarn = "";
	dobWarn = "";
	weightWarn = "";
	emailWarn = "";
	userNameWarn = "";
	heightWarn = "";
	genderWarn = "";

	heightFt = 4;
	heightInch = 0;


	signup = {
		firstname: "",
		lastname: "",
		dob: null,
		initialWeight: 0,
		email: "",
		userName: "",
		height: 0,
		gender: ""
	}

	checkDate = new Date(1990, 1, 1);



	constructor(
		private workoutapi: WorkoutapiService,
		private route: Router,
		private userapi: UserapiService
	) {
		this.calcHeight();
	}



	calcHeight() {
		this.signup.height = (this.heightInch) + (this.heightFt * 12);
		if (this.signup.height < 48) {
			this.signup.height = 0;
		}
	}

	checkWeight() {
		if (this.signup.initialWeight < 70 || this.signup.initialWeight > 500) {
			this.signup.initialWeight = 0;
		}
	}



	AddUser() {
		this.fnameWarn = "";
		this.lnameWarn = "";
		this.dobWarn = "";
		this.weightWarn = "";
		this.emailWarn = "";
		this.userNameWarn = "";
		this.heightWarn = "";
		this.genderWarn = "";

		this.calcHeight();
		this.checkWeight();


		/*        if (this.signup.dob != this.checkDate) {*/
		if (this.signup.firstname == "") {
			this.fnameWarn = "Please enter your first name.";
			return;
		}
		if (this.signup.lastname == "") {
			this.lnameWarn = "Please enter your last name.";
			return;
		}
		if (!this.signup.dob || this.signup.dob < this.checkDate) {
			this.dobWarn = "Please enter a valid date of birth.";
			debugger;
			return;
		}
		if (this.signup.initialWeight == 0) {
			this.weightWarn = "Please enter a valid weight.";
			this.signup.initialWeight
			return;
		}
		if (this.signup.email == "") {
			this.emailWarn = "Please enter your email.";
			return;
		}
		if (this.signup.userName == "") {
			this.userNameWarn = "Please enter your username.";
			return;
		}
		if (this.signup.height == 0) {
			this.heightWarn = "Please enter a valid height.";
			this.heightFt = 4;
			this.heightInch = 0;
			return;
		}
		if (this.signup.gender == "") {
			this.genderWarn = "Please enter your gender.";
			return;
		}



		debugger;
		this.userapi.AddUser(this.signup);
		/*this.userapi.CheckLoggedIn();*/
		this.route.navigateByUrl('/profile');
	}

}
