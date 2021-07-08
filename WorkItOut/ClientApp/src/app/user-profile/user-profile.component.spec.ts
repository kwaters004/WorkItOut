/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { UserProfileComponent } from './user-profile.component';

let component: UserProfileComponent;
let fixture: ComponentFixture<UserProfileComponent>;

describe('user-profile component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ UserProfileComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(UserProfileComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});