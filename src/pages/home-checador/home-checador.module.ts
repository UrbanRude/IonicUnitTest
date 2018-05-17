import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeChecadorPage } from './home-checador';

@NgModule({
  declarations: [
    HomeChecadorPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeChecadorPage),
  ],
})
export class HomeChecadorPageModule {}
