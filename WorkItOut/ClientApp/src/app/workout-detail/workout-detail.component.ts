import { Component, Input, OnInit } from '@angular/core';
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

    constructor(
        //Run function to confirm if fav or not
        
        private workoutapi: WorkoutapiService,
        private userapi: UserapiService,
        private route: Router
    ) {
        //debugger;
        //console.log(this.wrkout);
    }

    ngOnInit() {



	}

    showHide() {
        if (this.sh) { this.sh = false; return; }
        this.sh = true;
    }


    showLog() {

        if (this.shLog) { this.shLog = false; return; }
        this.shLog = true;
    }

    showHideEdit() {
        if (this.shInput) { this.shInput = false; return; }
        this.shInput = true;
    }


    EditWorkout(workout) {
        this.workoutapi.EditWorkout(workout);
        this.showHideEdit();
    }

    AddFavorite() {
        debugger;
        this.userapi.AddFavorite(this.wrkout.workoutId);
        //this.route.navigateByUrl('/addlinktofavs');
    }

    changeCheckbox() {
        debugger;
        if (this.isFave)
        {
            this.AddFavorite();
        }
    }

}
