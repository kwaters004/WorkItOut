import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WeatherapiService {
    constructor(private http: HttpClient) {

        this.getCurrentWeather();
    }

    currentWeather = null;

    getCurrentWeather() {

        this.http.get<any>('weather/currentweather').subscribe(result => {
            this.currentWeather = result;
            console.log(result);
        }, error => {
            console.log(error);
        })


    }
}
