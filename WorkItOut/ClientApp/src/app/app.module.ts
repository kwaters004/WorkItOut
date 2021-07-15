import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { WorkoutLogComponent } from './workout-log/workout-log.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserapiService } from './userapi.service';
import { LogOutComponent } from './log-out/log-out.component';
import { FavoriteWorkoutComponent } from './favorite-workout/favorite-workout.component';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { WeatherapiService } from './weatherapi.service';
import { DbJoinComponent } from './db-join/db-join.component';
import { ListLogsComponent } from './list-logs/list-logs.component';
import { LogInfoComponent } from './log-info/log-info.component';
import { LearnMoreComponent } from './learn-more/learn-more.component';
import { LogPageComponent } from './log-page/log-page.component';



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
        AddWorkoutComponent,
        WorkoutLogComponent,
        UserProfileComponent,
        LogOutComponent,
        WeatherInfoComponent,
        DbJoinComponent,
        FavoriteWorkoutComponent,
        ListLogsComponent,
        LogInfoComponent,
        LearnMoreComponent,
        LogPageComponent

    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        

        RouterModule.forRoot([
            { path: '', component: HomeComponent, pathMatch: 'full' },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'list', component: ListWorkoutsComponent },
            { path: 'signup', component: UserSignupComponent },
            { path: 'login', component: HomeComponent },
            { path: 'wrkouts', component: ListWorkoutsComponent },
            { path: 'profile', component: UserProfileComponent },
            { path: 'logworkout/:id', component: WorkoutLogComponent },
            { path: 'logout', component: LogOutComponent },
            { path: 'join', component: DbJoinComponent },
            { path: 'favorites', component: FavoriteWorkoutComponent },
            { path: 'currentweather', component: WeatherInfoComponent },
            { path: 'learnmore', component: LearnMoreComponent },
            { path: 'yourlog/:id', component: LogPageComponent },
            

          
        ])
    ],
    providers: [WorkoutapiService, UserapiService, WeatherapiService],
    bootstrap: [AppComponent]
})
export class AppModule { }
