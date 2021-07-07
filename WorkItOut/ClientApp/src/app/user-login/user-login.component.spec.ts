// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { UserLoginComponent } from './user-login.component';

let component: UserLoginComponent;
let fixture: ComponentFixture<UserLoginComponent>;

describe('user-login component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ UserLoginComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(UserLoginComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
