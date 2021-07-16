import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UserapiService } from '../userapi.service';
import { WorkoutapiService } from '../workoutapi.service';

@Component({
    selector: 'app-workout-detail',
    templateUrl: './workout-detail.component.html',
    styleUrls: ['./workout-detail.component.css']
})
/** workout-detail component*/
export class WorkoutDetailComponent implements OnInit {
    /** workout-detail ctor */

    @Input() wrkout;

    shLog: boolean = false;
    sh: boolean = false;
    shInput: boolean = false;
    isFave: boolean = false;
    userFavorites = null;
    thisFave = null;

    constructor(
        //Run function to confirm if fav or not
        
        private workoutapi: WorkoutapiService,
        private userapi: UserapiService,
        private route: Router
    ) {
        //debugger;
        //console.log(this.wrkout);

        

    }
    //ngOnChanges(changes: SimpleChanges): void {
    //    throw new Error('Method not implemented.');
    //    if (this.userapi.User) {

    //        debugger;
    //        this.CheckForFav();
    //    }


    //}

    ngOnInit() {

        if (this.userapi.User && this.userapi.Favorites.length > 0) {


        this.CheckForFav();
        }



	}

    showHide() {
        if (this.sh) { this.sh = false; return; }
        this.sh = true;
    }


    showLog() {

        if (this.shLog) { this.shLog = false; return; }
        this.shLog = true;
    }

    GoLog() {
        this.route.navigate(['logworkout', this.wrkout.workoutId]);
	}

    showHideEdit() {
        if (this.shInput) { this.shInput = false; return; }
        this.shInput = true;
    }


    EditWorkout(workout) {
        this.workoutapi.EditWorkout(workout);
        this.showHideEdit();
    }



    

    changeCheckbox() {

        if (this.isFave) {
            this.AddFavorite();

            
        }
        else {
            this.RemoveFavorite();


		}
    }

    AddFavorite() {
        this.thisFave.userId = this.userapi.User.userId;
        this.thisFave.workoutId = this.wrkout.workoutId;
        this.userapi.AddFavorite(this.wrkout.workoutId);
        this.userapi.Favorites.push(this.thisFave);
        debugger;
        //this.route.navigateByUrl('/addlinktofavs');
    }

    RemoveFavorite() {
        debugger;
        this.userapi.RemoveFavorite(this.thisFave.favoriteId);
        this.RemoveFromFavoritesArray();
        
    }

    GetAllFavorites() {

        this.userapi.GetFavorites();
    }

    CheckForFav() {
        if (this.userapi.Favorites.length > 0) {

        for (let i = 0; i < this.userapi.Favorites.length; i++) {
            if (this.wrkout.workoutId == this.userapi.Favorites[i].workoutId) {
                this.isFave = true;
                console.log(true);
                this.thisFave = this.userapi.Favorites[i];
            }

		}
		}
    }

    RemoveFromFavoritesArray() {
        for (let i = 0; i < this.userapi.Favorites.length; i++) {
            if (this.userapi.Favorites[i].workoutId == this.thisFave.workoutId) {
                this.userapi.Favorites.splice(i, 1);
			}
        }
        
	}

}
