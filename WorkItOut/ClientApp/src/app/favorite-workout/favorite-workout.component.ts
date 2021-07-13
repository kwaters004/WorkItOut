import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserapiService } from '../userapi.service';

@Component({
    selector: 'app-favorite-workout',
    templateUrl: './favorite-workout.component.html',
    styleUrls: ['./favorite-workout.component.css']
})
/** favorite-workout component*/
export class FavoriteWorkoutComponent {
    /** favorite-workout ctor */
    constructor(private userapi: UserapiService, private route: Router) {
        this.userapi.GetFavorites(this.userapi.User.userId);

    }


    ngOnInit() {



    }
}
