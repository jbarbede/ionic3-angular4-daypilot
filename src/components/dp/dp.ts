import { Component, ViewChild } from '@angular/core';
import { DayPilot } from "daypilot-pro-angular";

/**
 * Generated class for the Dp component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'dp',
  templateUrl: 'dp.html'
})
export class DpComponent {
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

  constructor() {
    console.log('Hello Dp Component');
  }

}
