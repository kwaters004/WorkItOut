import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WeatherapiService {
    constructor(private http: HttpClient) {

        this.getCurrentWeather();
    }

    getCurrentWeather() {
        debugger;
        this.http.get<any>('weather/currentweather').subscribe(result => {
            debugger;
            console.log(result);
        }, error => {
            console.log(error);
        })


    }
}
