import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserapiService {

    username = null;

    User = null;

    constructor(private http: HttpClient) {
    }

    clickLogin(email) {
        this.http.get<any>('user/isuser', email).subscribe(result => {
            debugger;
            this.User = result;
            console.log(result);
        }, error => {
            console.log(error);
        });
    }
}
