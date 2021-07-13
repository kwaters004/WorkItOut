import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'oidc-client';
import { UserapiService } from '../userapi.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
/** user-profile component*/
export class UserProfileComponent {
/** user-profile ctor */


    observ

    userAge = null;
    userDob = null;

    newDOB: Date = null;


    user = {
        userId: 1,
        firstname: "Bruce",
        lastname: "Banner",
        dob: new Date(),
        initialWeight: 175,
        email: "b.banner@yahoo.com",
        userName: "Hulkaroo",
        height: 72,
        gender: "male",
    }

    userBackup = null;

    sh = false;


    constructor(private userapi: UserapiService, private route: Router) {

            

    }

    ngOnInit() {
    /* this.updateUserAttributes();*/
        this.loggedOut();
	}


    updateUserAttributes() {
        let today: any = new Date();
        

        //let y = new Intl.DateFormat('en', { year: 'numeric' }).format(this.user.dob);
        //let m = new Intl.DateFormat('en', { month: 'numeric' }).format(this.user.dob);
        //let d = new Intl.DateFormat('en', { day: 'numeric' }).format(this.user.dob);
        
        
        this.userAge = Math.floor((today - this.userapi.User.dob) / 86400000 / 365);


	}

    showEdit() {
        if (this.sh) {
            this.sh = false;
            return;
        }
        this.sh = true;
    }

    editProfile() {
        debugger;
        var dt = new Date(this.newDOB);
        var month = dt.getMonth();
        var day = dt.getDay();
        var year = dt.getFullYear();
        this.userapi.User.dob = new Date(year, month, day);
        this.userapi.updateUser();

        


/*        this.updateUserAttributes();*/
        this.showEdit();
        console.log(this.newDOB);
        
	}


    loggedOut() {

        if (this.userapi.User == null) {
        this.route.navigateByUrl("/");
        }
	}


    parseDate(dateString: string): Date {
        if (dateString) {

            return new Date(dateString);
        }
        return null;
    }
}
