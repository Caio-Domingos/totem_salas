import { Component } from '@angular/core';
// import * as noite from './../../jsons/noite.json';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(private navCtrl: NavController) {}

  goTo(turn: string) {
    this.navCtrl.navigateForward(`courses/${turn}`);
  }
}
