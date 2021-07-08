import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

@Injectable()
export class WorkoutapiService {


    constructor(private http: HttpClient) {

    }

    AddWorkout(theworkout) {
        this.http.put<any>('workout/add', theworkout).subscribe(result => {
            console.log(result);
        }, error => {
            console.log(error);
        });
    }
    //the workout is the callback
    GetAllWorkouts(theworkout) {
        this.http.get<any>('workout/GetAllWorkOuts/', theworkout).subscribe(allworkouts => {
            theworkout(allworkouts); //function inside the function  that calls a memeber that passes in a function. 
        }, error => {
            console.log(error);
        });
    }

    GetOneWorkout(id, theworkout) {
        this.http.get<any>(`workout/getworkouts/${id}`, theworkout).subscribe(oneworkout => {
            console.log(oneworkout);
        theworkout()})
    }

    AddUser(theworkout) {
        this.http.post<any>('workout/')
    }
}




