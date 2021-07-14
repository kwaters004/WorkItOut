import { Component } from '@angular/core';
import { UserapiService } from './userapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
	title = 'app';


	constructor(private userapi: UserapiService) {
		this.userapi.getIPAddress();
	}
}
