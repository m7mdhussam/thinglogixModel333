import { Component, OnInit } from '@angular/core';
import { AlarmService, Alarm } from '../alarm.service';

@Component({
  selector: 'app-alarm-list',
  templateUrl: './alarm-list.component.html',
  styleUrls: ['./alarm-list.component.css']
})
export class AlarmListComponent implements OnInit {

  alarms: Alarm[] = [];

  severityFilter: string = '';

  constructor(private alarmService: AlarmService) { }

  ngOnInit(): void {
    this.alarms = this.alarmService.getAlarms();
  }

  getSeverityColor(severity: string) {
    switch (severity) {
      case 'Critical':
        return 'red';
      case 'Major':
        return 'orange';
      case 'Medium':
        return 'yellow';
      case 'Normal':
        return 'green';
      default:
        return '';
    }
  }

  onFilterChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.severityFilter = selectElement.value;
  }

  get filteredAlarms() {
    return this.alarms.filter(alarm =>
      !this.severityFilter || alarm.severity === this.severityFilter
    );
  }
}
