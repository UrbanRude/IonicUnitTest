import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { HomeChecadorPage } from '../home-checador/home-checador';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  versionApp:string = '0.0.7';
  loginForm:FormGroup;
  userAccount:AbstractControl;
  userPassword:AbstractControl;
  textLogin:string;

  constructor(public navCtrl: NavController, 
              public _form_builder:FormBuilder,
              public _alert_ctrl:AlertController) {
      this.loginForm = this._form_builder.group({
      'userAccount': ['', Validators.required],
      'userPassword': ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onLogin(objFormLogin:any){
    objFormLogin.userAccount.toString() == 'Urbano'  ? 
                  this.navCtrl.push(HomeChecadorPage) : 
                  this.onErrorAlert('Error','Usuario y/o password incorrecto');
  }

  onErrorAlert(titlte: string, msj: string) {
    let alert = this._alert_ctrl.create({
      title: titlte,
      subTitle: msj,
      buttons: ['Cerrar']
    });
    alert.present();
  }

}
