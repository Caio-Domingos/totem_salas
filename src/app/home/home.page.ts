import { jsonSalas } from './../../files/csvformatted';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  jsonS = jsonSalas;
  point = 0;
  classroom = null;
  period = null;

  constructor() {}

  setPoint(value: number) {
    this.point = value;
  }
  getPoint() {
    return this.point;
  }

  setClassroom(value: number) {
    this.classroom = value;
  }
  deleteClassroom() {
    this.classroom = null;
  }
  getClassroom() {
    return this.classroom;
  }

  setPeriod(value: number) {
    this.period = value;
  }
  deletePeriod() {
    this.period = null;
  }
  getPeriod() {
    return this.period;
  }

  next(index: number) {
    if (this.point === 0) {
      this.point = 1;
      this.setClassroom(index);
      return;
    } else if (this.point === 1) {
      this.point = 2;
      this.setPeriod(index);
      return;
    }
  }

  back() {
    if (this.point === 2) {
      this.point = 1;
      this.deletePeriod();
      return;
    } else if (this.point === 1) {
      this.point = 0;
      this.deleteClassroom();
      return;
    }
  }
}
