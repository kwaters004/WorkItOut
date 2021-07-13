import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UserapiService } from '../userapi.service';
import { Observable } from 'rxjs';
/*import { of } from 'rxjs/observable/of';*/
import { EventEmitter } from 'events';


@Component({
	selector: 'app-nav-menu',
	templateUrl: './nav-menu.component.html',
	styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
	isExpanded = false;

	logInOut = "Log In";
	$isLoggedIn = new EventEmitter
	//observable = Observable.create((observer) => {
	//	observer.next('Start processing...');

	//	setTimeout(() => observer.next('Still processing ...'), 3000);

	//	setTimeout(() => observer.complete(), 5000);
	//})



	constructor(private userapi: UserapiService, private route: Router) {

	}

	ngOnInit() {
		//	this.CheckLoggedIn();
		//	this.observable.subscribe(
		//		data => console.log(data),
		//		error => console.log(error),
		//		() => console.log('Process Completed')
		//	)


		this.userapi.$isLoggedIn.subscribe(result => {
			console.log(result);
			this.setLogInOut(result);
		}, error => {
			console.log(error);
		});
	}

	//ngOnChanges() {
	//	debugger;
	//	this.userapi.$isLoggedIn.subscribe(result => {
	//		console.log(result);

	//	}, error => {
	//		console.log(error);
	//	});
	//}

	collapse() {
		this.isExpanded = false;
	}

	toggle() {
		this.isExpanded = !this.isExpanded;
	}



	setLogInOut(loggedIn) {

		if (loggedIn) {
			this.logInOut = "Log Out";
			return;
		}
		this.logInOut = "Log In";
	}

	reloadNav() {

	}


}
