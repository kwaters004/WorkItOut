import { Injectable, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

@Injectable()
export class WorkoutapiService {

    workouts = null;
    currentWorkoutId = null;
    
    constructor(private http: HttpClient) {

    }

    GetOneWorkout(id, theworkout) {
        this.http.get<any>(`workout/getworkouts/${id}`, theworkout).subscribe(oneworkout => {
            console.log(oneworkout);
        theworkout()})
    }

    AddUser(theworkout) {
        /*this.http.post<any>('workout/')*/
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

    EditWorkout(theworkout) {
        this.http.put<any>('workout/edit', theworkout).subscribe(result => {
            console.log(result);
        }, error => {
            console.log(error);
        });
    }


  }
