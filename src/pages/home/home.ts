import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DayPilot } from 'daypilot-pro-angular';

import { DpPage } from './../dp/dp';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('scheduler') scheduler: DayPilot.Angular.Scheduler;

  events: any[] = [
    { start: "2016-09-09", end: "2016-09-10", id: 1, text: "Event 1", resource: "R1" }
  ];

  config: any = {
    scale: "Day",
    startDate: "2016-09-01",
    days: new DayPilot.Date("2016-09-09").daysInMonth(),
    timeHeaders: [
      { groupBy: "Month" },
      { groupBy: "Day", format: "d" }
    ],
    cellWidthSpec: "Auto",
    resources: [
      { name: "R1", id: "R1" },
      { name: "R2", id: "R2" },
      { name: "R3", id: "R3" },
    ],
    onTimeRangeSelected: args => {
      alert("start: " + args.start);
    },
    onEventClicked: args => {
      alert("clicked: " + args.e.text());
    },
    onEventMoved: args => {
      this.scheduler.control.message("Moved");
    },
    onEventResized: args => {
      this.scheduler.control.message("Moved");
    }
  };

  constructor(public navCtrl: NavController) {

  }

  goToDynamic() {
    this.navCtrl.push(DpPage);
  }
}
