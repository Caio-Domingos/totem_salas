import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import night from './../../jsons/noite.json';
import morn from './../../jsons/manha.json';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss']
})
export class CoursesPage {
  turnId: string;
  json;

  coursesName;

  constructor(actRoute: ActivatedRoute, private navCtrl: NavController) {
    this.turnId = actRoute.snapshot.paramMap.get('turn');
  }

  ionViewWillEnter() {
    this.json = this.turnId === 'morn' ? morn : night;

    console.log('json', this.json);

    this.coursesName = Object.keys(this.json);
  }

  goTo(course: string) {
    this.navCtrl.navigateForward(`periods/${this.turnId}/${course}`);
  }
}
