import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alarm-list',
  templateUrl: './alarm-list.component.html',
  styleUrls: ['./alarm-list.component.css']
})
export class AlarmListComponent implements OnInit {

  alarms = [
    {
      time: 'Apr 4, 2020, 3:15:22 PM GMT',
      severity: 'Major',
      deviceName: 'PVC 1942',
      networkAddress: '101.142.24.90',
      alarmTitle: 'WATCHTHREESH'
    },
    {
      time: 'Apr 4, 2020, 3:15:22 PM GMT',
      severity: 'Critical',
      deviceName: 'PVC 1942',
      networkAddress: '101.142.24.90',
      alarmTitle: 'WATCHTHREESHO'
    },
    {
      time: 'Apr 4, 2020, 3:15:22 PM GMT',
      severity: 'Medium',
      deviceName: 'PVC 1942',
      networkAddress: '101.142.24.90',
      alarmTitle: 'WATCHTHREESHO'
    },
    {
      time: 'Apr 4, 2020, 3:15:22 PM GMT',
      severity: 'Normal',
      deviceName: 'PVC 1942',
      networkAddress: '101.142.24.90',
      alarmTitle: 'WATCHTHREESHO'
    },
    {
      time: 'Apr 4, 2020, 3:15:22 PM GMT',
      severity: 'Major',
      deviceName: 'PVC 1942',
      networkAddress: '101.142.24.90',
      alarmTitle: 'WATCHTHREESH'
    },
    {
      time: 'Apr 4, 2020, 3:15:22 PM GMT',
      severity: 'Critical',
      deviceName: 'PVC 1942',
      networkAddress: '101.142.24.90',
      alarmTitle: 'WATCHTHREESHO'
    },
    {
      time: 'Apr 4, 2020, 3:15:22 PM GMT',
      severity: 'Medium',
      deviceName: 'PVC 1942',
      networkAddress: '101.142.24.90',
      alarmTitle: 'WATCHTHREESHO'
    },
    {
      time: 'Apr 4, 2020, 3:15:22 PM GMT',
      severity: 'Normal',
      deviceName: 'PVC 1942',
      networkAddress: '101.142.24.90',
      alarmTitle: 'WATCHTHREESI'
    }
  ];

  severityFilter: string = '';

  constructor() { }

  ngOnInit(): void {
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
