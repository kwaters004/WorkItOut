
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserapiService } from '../userapi.service';

@Component({
	selector: 'app-log-out',
	templateUrl: './log-out.component.html',
	styleUrls: ['./log-out.component.css']
})
/** log-out component*/
export class LogOutComponent implements OnInit {
	/** log-out ctor */
	constructor(private userapi: UserapiService, private route: Router) {


	}

	ngOnInit() {
		this.logOut();
	}


	logOut() {

		this.userapi.User = null;
		this.route.navigateByUrl('/login');
		this.userapi.CheckLoggedIn();
	}
}


