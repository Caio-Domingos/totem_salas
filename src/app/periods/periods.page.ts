import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import morn from './../../jsons/manha.json';
import night from './../../jsons/noite.json';

@Component({
  selector: 'app-periods',
  templateUrl: './periods.page.html',
  styleUrls: ['./periods.page.scss']
})
export class PeriodsPage {
  turnId: string;
  courseId: string;
  json;
  courseJson;

  periodsName;

  constructor(actRoute: ActivatedRoute, private navCtrl: NavController) {
    this.turnId = actRoute.snapshot.paramMap.get('turn');
    this.courseId = actRoute.snapshot.paramMap.get('course');
  }

  ionViewWillEnter() {
    this.json = this.turnId === 'morn' ? morn : night;
    this.courseJson = this.json[this.courseId];

    console.log('json', this.json);

    this.periodsName = Object.keys(this.courseJson);
  }

  goTo(period: string) {
    this.navCtrl.navigateForward(`info/${this.turnId}/${this.courseId}/${period}`);
  }
}
