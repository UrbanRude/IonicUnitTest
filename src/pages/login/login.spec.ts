import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPage } from './login';
import { NavController, NavParams, IonicModule } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

fdescribe('Login Page',() => {
    
    let component:LoginPage;
    let fixture:ComponentFixture<LoginPage>;
    let loginForm:FormGroup;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                LoginPage
            ],
            imports: [
                IonicModule.forRoot(LoginPage)
            ],
            providers: [
                NavController,
                FormBuilder
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginPage);
        component = fixture.componentInstance;
    });

    it('should create component',() => {
        expect(component).toBeDefined();
    });

    it('should Prueba Login',
        () =>{
           let loginForm ={
                'userAccount' : 'Urbano',
                'userPassword' : '123'
           }
            const compiled = fixture.nativeElement;
            component.onLogin(loginForm);
            fixture.detectChanges();
        }
    );

    it('should test bad login',
        () =>{
           let loginForm ={
                'userAccount' : 'Urb2ano',
                'userPassword' : '123'
           }
            const compiled = fixture.nativeElement;
            component.onLogin(loginForm);
            fixture.detectChanges();
        }
    );
});