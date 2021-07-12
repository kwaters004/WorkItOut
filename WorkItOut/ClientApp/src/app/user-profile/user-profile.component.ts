import { Component } from '@angular/core';
import { User } from 'oidc-client';
import { UserapiService } from '../userapi.service';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
/** user-profile component*/
export class UserProfileComponent {
/** user-profile ctor */


    userAge = null;
    userDob = null;
    heightFt = null;
    heightInch = null;
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


    constructor(private userapi: UserapiService) {


        this.user = this.userapi.User;

        this.updateUserAttributes();

        this.userBackup = this.user;
        
        
    }

    ngOnInit() {
	}


    updateUserAttributes() {
        let today: any = new Date();

        debugger;
        let y = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(this.user.dob);
        let m = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(this.user.dob);
        let d = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(this.user.dob);
        this.userDob = `${m}/${d}/${y}`

        this.userAge = Math.floor((today - this.user.dob) / 86400000 / 365);

        this.heightFt = Math.floor(this.user.height / 12);
        this.heightInch = this.user.height % 12;
	}

    showEdit() {
        if (this.sh) {
            this.sh = false;
            return;
        }
        this.sh = true;
    }

    editProfile() {

        var dt = new Date(this.newDOB);
        var month = dt.getMonth();
        var day = dt.getDay();
        var year = dt.getFullYear();
        this.user.dob = new Date(year, month, day);

        this.user.height = this.heightFt * 12 + this.heightInch;


        this.updateUserAttributes();
        this.showEdit();
        console.log(this.newDOB);
        
	}


    
}
