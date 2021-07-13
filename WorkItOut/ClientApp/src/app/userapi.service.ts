import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';


@Injectable()
export class UserapiService {

	username = null;
	isUser = false;
	User = {
		userId: null,
		firstname: "",
		lastname: "",
		dob: null,
		initialWeight: 0,
		email: "",
		userName: "",
		height: 0,
		gender: ""
	}

	constructor(private http: HttpClient, private route: Router) {
	}

	clickLogin(user) {
		this.http.post<any>('user/isuser', user).subscribe(result => {
			this.User = result;

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



	//GetUser(user) {
	//	this.http.post<any>('user/getUser', user).subscribe(result => {
	//		this.User = result;
	//		debugger;
	//	}, error => {
	//		console.log(error);
	//	});
	//}
}
