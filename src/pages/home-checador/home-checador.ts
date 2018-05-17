import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomeChecadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-checador',
  templateUrl: 'home-checador.html',
})
export class HomeChecadorPage {

  userInfo = {
    userName:'',
    porcentage:null,
    progress:null,
    total:null
  }

  notification = {
    text:'ASDASFASDFSADFSDFASDFASDFASDFASDFASDFASDFASDFASDFASDFSADFASDFSADFSADFASDFSADF'
  }

  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeChecadorPage');
    this.userInfo.porcentage = 73;
    this.userInfo.progress = 56;
    this.userInfo.total = 75;
    this.userInfo.userName = 'Urbano'


  }

}
