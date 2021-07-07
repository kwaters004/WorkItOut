// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { AddWorkoutComponent } from './add-workout.component';

let component: AddWorkoutComponent;
let fixture: ComponentFixture<AddWorkoutComponent>;

describe('add-workout component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AddWorkoutComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(AddWorkoutComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
