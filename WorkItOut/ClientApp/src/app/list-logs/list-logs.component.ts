import { Component, Input } from '@angular/core';
import { UserapiService } from '../userapi.service';

@Component({
    selector: 'app-list-logs',
    templateUrl: './list-logs.component.html',
    styleUrls: ['./list-logs.component.css']
})
/** list-logs component*/
export class ListLogsComponent {



/** list-logs ctor */
    constructor(private userapi: UserapiService) {
        
    }
}
