import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { UserapiService } from './userapi.service';

@Injectable()
export class WeatherapiService implements OnInit {



    constructor(private http: HttpClient, private userapi: UserapiService) {
        debugger;

    }

    ngOnInit() {
        

    }

    currentWeather = null;

    getCurrentWeather(ip: string) {
        debugger;
        this.http.get<any>(`weather/currentweather/${ip}`).subscribe(result => {
            this.currentWeather = result;
            console.log(result);
        }, error => {
            console.log(error);
        })


    }

}
