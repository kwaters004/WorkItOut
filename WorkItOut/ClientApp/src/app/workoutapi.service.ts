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


  }

