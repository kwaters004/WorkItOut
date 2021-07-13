import { Component } from '@angular/core';
import { UserapiService } from '../userapi.service';
import { WeatherapiService } from '../weatherapi.service';

@Component({
    selector: 'app-weather-info',
    templateUrl: './weather-info.component.html',
    styleUrls: ['./weather-info.component.css']
})
/** weather-info component*/
export class WeatherInfoComponent {
    /** weather-info ctor */
    constructor(private weatherapi: WeatherapiService, private userapi: UserapiService) {
        this.weatherapi.getCurrentWeather(this.userapi.theIp.ip);
    }




}
