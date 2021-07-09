import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserapiService {

    username = null;

    User = null;

    constructor(private http: HttpClient) {
    }

    clickLogin(email) { 
        return  this.http.post<any>('user/isuser', email)
    }
}
