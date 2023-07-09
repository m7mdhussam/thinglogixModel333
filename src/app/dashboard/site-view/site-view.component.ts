import { Component, OnInit } from '@angular/core';
import { AlarmService, Alarm } from '../alarm.service';

@Component({
  selector: 'app-site-view',
  templateUrl: './site-view.component.html',
  styleUrls: ['./site-view.component.css']
})
export class SiteViewComponent implements OnInit {

  alarms: Alarm[] = [];

  constructor(private alarmService: AlarmService) { }

  ngOnInit(): void {
    this.alarms = this.alarmService.getAlarms();
  }

  getSiteImage(): string {
    let recentAlarm = this.alarms[0];

    // Loop through all alarms and get the recent severity
    for(let i = 0; i < this.alarms.length; i++) {
      const alarm = this.alarms[i];
      if (new Date(alarm.time) > new Date(recentAlarm.time)) {
        recentAlarm = alarm;
      }
    }

    // Return the image url depending on the recent severity
    switch (recentAlarm.severity) {
      case 'Critical':
        return '/assets/Critical.png';
      case 'Major':
        return '/assets/Major.png';
      case 'Medium':
        return '/assets/Medium.png';
      case 'Normal':
        return '/assets/Normal.png';
      default:
        return '';
    }
  }
}
