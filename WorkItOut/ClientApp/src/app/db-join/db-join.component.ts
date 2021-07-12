import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserapiService } from '../userapi.service';
import { WorkoutapiService } from '../workoutapi.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-db-join',
    templateUrl: './db-join.component.html',
    styleUrls: ['./db-join.component.css']
})
/** dbJoin component*/
export class DbJoinComponent {
    user: string = '';


    /** dbJoin ctor */
    constructor(private http: HttpClient, private workoutService: WorkoutapiService,
        private userService: UserapiService) {
        this.userService.GetUserJoin();
    }



    showJoin() {

        alert('show detail');

    }

}
