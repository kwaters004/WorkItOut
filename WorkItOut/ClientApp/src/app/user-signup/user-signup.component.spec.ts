// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { UserSignupComponent } from './user-signup.component';

let component: UserSignupComponent;
let fixture: ComponentFixture<UserSignupComponent>;

describe('user-signup component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ UserSignupComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(UserSignupComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
