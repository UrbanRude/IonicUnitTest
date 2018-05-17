import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModeloCompetidores } from './modelo-competidores';

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

  render:boolean=true;

  modeloCompetidores:ModeloCompetidores;
  modeloCompetidoresII:ModeloCompetidores;
  modeloCompetidoresIII:ModeloCompetidores;
  img_demo: string = "./assets/img";
  listCompetidores = Array<ModeloCompetidores>();

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
    this.modeloCompetidores = new ModeloCompetidores();
    this.modeloCompetidores.setCompetidorName('City-Club');
    this.modeloCompetidores.setStatusCompetidor('');
    this.modeloCompetidores.setImgCompetidor(`${this.img_demo}/City-Club.png`);
    this.modeloCompetidoresII = new ModeloCompetidores();
    this.modeloCompetidoresII.setCompetidorName('Costco');
    this.modeloCompetidoresII.setStatusCompetidor('');
    this.modeloCompetidoresII.setImgCompetidor(`${this.img_demo}/Costco.png`)
    this.modeloCompetidoresIII = new ModeloCompetidores();
    this.modeloCompetidoresIII.setCompetidorName('Sams-Club');
    this.modeloCompetidoresIII.setStatusCompetidor('');
    this.modeloCompetidoresIII.setImgCompetidor(`${this.img_demo}/Sams-Club.png`)
    this.listCompetidores[0] = this.modeloCompetidores;
    this.listCompetidores[1] = this.modeloCompetidoresII;
    this.listCompetidores[2] = this.modeloCompetidoresIII;
  }

  hide(){
    console.log(1);
    this.render = false;
  }

}
