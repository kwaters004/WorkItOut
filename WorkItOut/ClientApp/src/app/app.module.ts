import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ListWorkoutsComponent } from './list-workouts/list-workouts.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { WorkoutapiService } from './workoutapi.service';
import { WorkoutDetailComponent } from './workout-detail/workout-detail.component';
import { AddWorkoutComponent } from './add-workout/add-workout.component';


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        CounterComponent,
        FetchDataComponent,
        UserSignupComponent,
        ListWorkoutsComponent,
        WorkoutDetailComponent,
        AddWorkoutComponent

    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent, pathMatch: 'full' },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'list', component: ListWorkoutsComponent },
            { path: 'signup', component: UserSignupComponent },
            { path: 'login', component: HomeComponent },
            { path: 'wrkouts', component: ListWorkoutsComponent }
        ])
    ],
    providers: [WorkoutapiService],
    bootstrap: [AppComponent]
})
export class AppModule { }
