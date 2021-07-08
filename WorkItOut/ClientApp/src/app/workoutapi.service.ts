import { Injectable, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

@Injectable()
export class WorkoutapiService {


    workouts = null;
    
    
    constructor(private http: HttpClient) {

  }

  AddWorkout(theworkout) {
      this.http.put<any>('workout/add', theworkout).subscribe(result => {
          debugger;
      console.log(result);
    }, error => {
      console.log(error);
    });
  }


    GetWorkouts() {
        this.http.get<any>('workout/GetAllWorkOuts').subscribe(result => {
            this.workouts = result;
            
        }, error => {
            console.log(error);
        });
    }

  }

