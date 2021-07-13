import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class WeatherapiService implements OnInit {

    theIp = null;

    constructor(private http: HttpClient) {
        debugger;
        this.getIPAddress();
    }

    ngOnInit() {
        

    }

    currentWeather = null;

    getCurrentWeather() {
        debugger;
        this.http.get<any>(`weather/currentweather/${this.theIp.ip}`).subscribe(result => {
            this.currentWeather = result;
            console.log(result);
        }, error => {
            console.log(error);
        })


    }

    getIPAddress() {
        debugger;
        this.http.get<any>('weather/getip').subscribe(result => {
            this.theIp = result;
        }, error => {
            console.log(error);
        })
    }
}
