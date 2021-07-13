import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';


@Injectable()
export class UserapiService {

	username = null;
	isUser = false;
	Favorites = null;
	User = null;

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
	
	constructor(private http: HttpClient, private route: Router) {

	}

	clickLogin(user) {
		this.getIPAddress();
		this.http.post<any>('user/isuser', user).subscribe(result => {
			this.User = result;
			this.udpateHeight();
			this.updateAgeAndDOB();
		}, error => {
			console.log(error);
		});
	}

	WorkoutLog(workoutLog) {
		this.http.post<any>('user/addlog', workoutLog).subscribe(result => {
			console.log(result);
		}, error => {
			console.log(error);
		});
	}

	AddUser(adduser) {
		this.User = adduser;
		this.udpateHeight();
		this.updateAgeAndDOB();
		this.CheckLoggedIn();
		debugger;
		this.http.post<any>('user/addUser', adduser).subscribe(result => {
			console.log(result);
			
		}, error => {
			console.log(error);
		});
	}


	GetUserJoin() {
		this.http.get<any>('user/joindb').subscribe(result => {
			console.log(result);
			this.GetUserJoin = result;
		}, error => {
			console.log(error);
		});
    }//me

	AddFavorite(addFave) {
		debugger;
		this.http.post<any>('user/addFave', {workoutId: addFave, userId: this.User.userId }).subscribe(result => {
			console.log(result);
		}, error => {
			console.log(error);
		});
	}


	GetFavorites(id) {
		this.http.get<any>(`user/GetFavorites/userId ${id}`).subscribe(result => {
			this.Favorites = result;
		}, error => {
			console.log(error);
		});
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
		this.User.height = this.heightFt * 12 + this.heightInch;
		this.http.post<any>('user/updateUser', this.User).subscribe(result => {
			console.log(result);
		}, error => {
			console.log(error);
		});
	}


	updateAgeAndDOB() {


		let today: any = new Date();
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


	udpateHeight() {
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
		debugger;
		this.http.get<any>('https://api.ipify.org/?format=json').subscribe(result => {
			debugger;

			this.theIp = result;
		}, error => {
			console.log(error);

		})
	}

}
