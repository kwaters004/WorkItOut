import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-log-info',
    templateUrl: './log-info.component.html',
    styleUrls: ['./log-info.component.css']
})
/** log-info component*/
export class LogInfoComponent implements OnInit{
    @Input() aLog: any;

    dateStr = null;

/** log-info ctor */
    constructor() {
        
    }

    ngOnInit() {
        this.GetDateStr();
	}
    
    GetDateStr() {
        let newStr = this.aLog.timeOfWorkout.toString();
        this.dateStr = newStr.substring(5, 7) + "-" + newStr.substring(8, 10) + "-" + newStr.substring(0, 4);
	}
    
}
