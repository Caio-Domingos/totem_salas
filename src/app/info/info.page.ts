import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import morn from './../../jsons/manha.json';
import night from './../../jsons/noite.json';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss']
})
export class InfoPage {
  turnId: string;
  courseId: string;
  periodId: string;
  json;
  courseJson;
  periodJson;

  infos;

  constructor(actRoute: ActivatedRoute, private navCtrl: NavController) {
    this.turnId = actRoute.snapshot.paramMap.get('turn');
    this.courseId = actRoute.snapshot.paramMap.get('course');
    this.periodId = actRoute.snapshot.paramMap.get('period');
  }

  ionViewWillEnter() {
    this.json = this.turnId === 'morn' ? morn : night;
    this.courseJson = this.json[this.courseId];
    this.periodJson = this.courseJson[this.periodId];

    console.log('json', this.json);

    this.infos = Object.keys(this.periodJson);
  }

  goTo(period: string) {
    this.navCtrl.navigateForward(
      `periods/${this.turnId}/${this.courseId}/${period}`
    );
  }
}
