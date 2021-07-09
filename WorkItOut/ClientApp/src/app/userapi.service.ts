import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserapiService {

	username = null;

	User = null;

	constructor(private http: HttpClient) {
	}

	clickLogin(user) {
		this.http.post<any>('user/isuser', user).subscribe(result => {
			console.log(result);
		}, error => {
				console.log(error);
		});
	}

	WorkoutLog(workoutLog) {
		this.http.put<any>('user/add', workoutLog).subscribe(result => {
			console.log(result);
		}, error => {
			console.log(error);
		});
	}
}
