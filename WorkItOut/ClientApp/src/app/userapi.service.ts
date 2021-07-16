import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';
import { WorkoutapiService } from './workoutapi.service';


@Injectable()
export class UserapiService {

	username = null;
	isUser = false;

	joinDb = null;

	// this is the list of workouts that are faves
	favesList = [];
	// this is the list of actual favorite objects
	Favorites = [];

	User = null;
	userLogs = null;

	//User = {
	//	firstname: null,
	//	lastname: null,
	//	dob: null,
	//	initialWeight: null,
	//	email: null,
	//	userName: null,
	//	height: null,
	//	gender: null,
	//	userId: null,
	//	password: null
	//}


//User = {
	//	userId: null,
	//	firstname: "",
	//	lastname: "",
	//	dob: null,
	//	initialWeight: 0,
	//	email: "",
	//	userName: "",
	//	height: 0,
	//	gender: ""
	//}

	age = null;
	dobStr = "";
	dob = null;
	heightFt = null;
	heightInch = null;
	dateInputFormat = "";

	$isLoggedIn = new EventEmitter();

	theIp = {
		ip: ''
	}
	
	constructor(private http: HttpClient, private route: Router, private workoutapi: WorkoutapiService) {
		this.workoutapi.GetWorkouts();
	}

	clickLogin(user) {
		
		this.http.post<any>('user/isuser', user).subscribe(result => {
			debugger;
			this.User = result;
			this.updateHeight();
			this.updateAgeAndDOB();
			this.getUserLogs();
			// running these functions because it means the connection is closed



		}, error => {
				this.route.navigateByUrl('/');
				this.User.password = null;
				console.log(error);
		});
	}

	WorkoutLog(workoutLog) {

		this.http.post<any>('user/addlog', workoutLog).subscribe(result => {
			console.log(result);
			this.getUserLogs();
		}, error => {
			console.log(error);
		});
		this.getUserLogs();
	}

	AddUser(adduser) {
		this.User = adduser;
		this.updateHeight();
		this.updateAgeAndDOB();
		this.CheckLoggedIn();

		this.http.post<any>('user/addUser', adduser).subscribe(result => {
			console.log(result);
			
		}, error => {
			console.log(error);
		});
	}


	GetUserJoin(id) {
		this.http.get<any>(`user/joindb/${id}`).subscribe(result => {
			debugger;
			console.log(result);
			this.joinDb = result;
			debugger;
		}, error => {
			console.log(error);
		});
    }//me

	AddFavorite(addFave) {

		this.http.post<any>('user/addFave', {workoutId: addFave, userId: this.User.userId }).subscribe(result => {
			console.log(result);
			this.GetFavorites();

		}, error => {
			console.log(error);
		});
	}

	RemoveFavorite(id) {
		this.http.delete<any>(`user/removeFave/${id}`).subscribe(result => {
			console.log(result);
			debugger;
			this.GetFavorites();

		}, error => {
				console.log(error);
		})
	}

	GetFavorites() {
		this.http.get<any>(`user/GetFavorites/${this.User.userId}`).subscribe(result => {
			this.Favorites = result;
			debugger;
			this.createFavesList();

		}, error => {
				debugger;
				console.log(error);
				this.Favorites = [];
		});
	}

	Isuser(id) {
		if (this.Isuser)
		{
			console.log(error)
			console.log("user does not exist")
		}

	}
	//GetUser(user) {
	//	this.http.post<any>('user/getUser', user).subscribe(result => {
	//		this.User = result;
	//		debugger;
	//	}, error => {
	//		console.log(error);
	//	});
	//}

	updateUser() {

		this.updateAgeAndDOB();
		this.User.height = this.heightFt * 12 + this.heightInch;
		this.http.post<any>('/user/edit', this.User).subscribe(result => {

			console.log(result);
		}, error => {
				console.log(error)
				console.log("didn't work");					;
		});
	}


	updateAgeAndDOB() {


		let today: any = new Date();
		// newStr is getting what is in the database 'YYYY-MM-DD' format
		let newStr = this.User.dob;
		this.dob = new Date(newStr.substring(0, 4), newStr.substring(5, 7), newStr.substring(8, 10));
		this.dateInputFormat = newStr.substring(0, 4) + "-" + newStr.substring(5, 7) + "-" + newStr.substring(8, 10);
		this.dobStr = newStr.substring(5, 7) + "-" + newStr.substring(8, 10) + "-" + newStr.substring(0, 4);
		//this.dobStr = new Date(this.User.dob).toLocaleDateString();
		this.age = Math.floor((today - this.dob) / 86400000 / 365);
		console.log(this.dateInputFormat);
		//test the character lengths
		
		//YYYY-MM-DD
	}


	updateHeight() {
		this.heightFt = Math.floor(this.User.height / 12);
		this.heightInch = this.User.height % 12;
	}

	CheckLoggedIn() {

		if (this.User) {
			this.$isLoggedIn.emit(1);
		}
		else {
			this.$isLoggedIn.emit(0);
		}
	}



	getIPAddress() {

		this.http.get<any>('https://api.ipify.org/?format=json').subscribe(result => {
			this.theIp = result;
		}, error => {
			console.log(error);

		})
	}


	getUserLogs() {
		this.http.get<any>(`user/getlogs/${this.User.userId}`).subscribe(result => {
			console.log(result);
			this.userLogs = result;
			this.GetFavorites();
		}, error => {
			console.log(error);
		});
	}

	editLog(aLog) {

		console.log(aLog);
		this.http.post<any>('user/editlog', aLog).subscribe(result => {

			console.log(result);
		}, error => {
			console.log(error);
		});
	}

	createFavesList() {
		debugger;
		if (this.Favorites.length == 0) {
			this.favesList = [];
		}
		else {
			this.favesList = [];
		for (let i = 0; i < this.workoutapi.workouts.length; i++) {
			for (let n = 0; n < this.Favorites.length; n++) {
				if (this.workoutapi.workouts[i].workoutId == this.Favorites[n].workoutId) {
					this.favesList.push(this.workoutapi.workouts[i]);
				}
			}
		}
		}
		console.log(this.favesList);

	}

}
