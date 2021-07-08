import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WorkoutapiService } from '../workoutapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

    constructor(private workoutService: WorkoutapiService, private route: Router) {

    }

    username: string = "";
    clickLogin() {
        this.workoutService.AddUser(this.username);
        this.route.navigateByUrl('/workout');
    }
}
