import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserapiService } from '../userapi.service';
import { WorkoutapiService } from '../workoutapi.service';

@Component({
	selector: 'app-log-page',
	templateUrl: './log-page.component.html',
	styleUrls: ['./log-page.component.css']
})
/** log-page component*/
export class LogPageComponent {
	/** log-page ctor */

	logId;
	theLog = null;
	sh: boolean = false;
	updatedLog = null;
	theWorkout = null;

	constructor(
		private route: ActivatedRoute,
		private userapi: UserapiService,
		private workoutapi: WorkoutapiService,
		private router: Router) {
		this.loggedOut();

		this.route.params.subscribe(params => {
			console.log(params);
			this.logId = params.id;
			this.GetTheLog();
			this.updatedLog = Object.assign({}, this.theLog);
			this.GetWorkout();
		});

	}



	GetTheLog() {
		if (this.userapi.userLogs) {
			for (let i = 0; i < this.userapi.userLogs.length; i++) {
				if (this.userapi.userLogs[i].workoutlogId == this.logId) {
					this.theLog = this.userapi.userLogs[i];
				}
			}

		}
	}

	GetWorkout() {
		if (this.workoutapi.workouts) {
			for (let i = 0; i < this.workoutapi.workouts.length; i++) {
				if (this.workoutapi.workouts[i].workoutId == this.theLog.workoutId) {
					this.theWorkout = this.workoutapi.workouts[i];
				}

			}

		}
	}

	EditShow() {
		if (this.sh) {
			this.sh = false;
			return;
		}
		this.sh = true;
	}

	CancelUpdate() {
		this.updatedLog = Object.assign({}, this.theLog);
		this.EditShow();
	}

	EditLog() {
		debugger;
		this.theLog = Object.assign({}, this.updatedLog);
		//let newDate = new Date();

		////this is saving the date and time of UTC
		//this.theLog.timeOfWorkout = newDate.toISOString();

		//let newStr: string = this.theLog.timeOfWorkout;
		/*        this.theLog.timeOfWorkout = newStr;*/
		this.userapi.editLog(this.theLog);
		this.EditShow();
	}

	loggedOut() {

		if (this.userapi.User == null) {
			this.router.navigateByUrl("/");
		}
	}




}
