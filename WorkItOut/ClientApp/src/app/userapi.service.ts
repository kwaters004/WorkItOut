import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';


@Injectable()
export class UserapiService {

	username = null;
	isUser = false;
	User = null;

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


	//GetUser(user) {
	//	this.http.post<any>('user/getUser', user).subscribe(result => {
	//		this.User = result;
	//		debugger;
	//	}, error => {
	//		console.log(error);
	//	});
	//}
}
