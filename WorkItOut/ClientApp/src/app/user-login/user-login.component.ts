import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.css']
})
/** user-login component*/
export class UserLoginComponent {
/** user-login ctor */
    login = {
        firstname: "",
        lastname: "",
        dob: 0,
        initialWeight: 0,
        email: "",
        userName: "",
        height: 0,
        gender: ""
    }


  @Input() firstname = "";
  constructor() {
    
  }
    AddUser() {
    alert('newuser');
  }
}
