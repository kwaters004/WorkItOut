import { Component } from '@angular/core';
import { WeatherapiService } from '../weatherapi.service';

@Component({
    selector: 'app-weather-info',
    templateUrl: './weather-info.component.html',
    styleUrls: ['./weather-info.component.css']
})
/** weather-info component*/
export class WeatherInfoComponent {
    /** weather-info ctor */
    constructor(private weatherapi: WeatherapiService) {
        this.weatherapi.getCurrentWeather();
    }




}
