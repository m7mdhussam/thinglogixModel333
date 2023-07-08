import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fuel-level',
  templateUrl: './fuel-level.component.html',
  styleUrls: ['./fuel-level.component.css']
})
export class FuelLevelComponent implements OnInit {

  fuelPercentage: number = 45;

  tanks = [
    {name: 'Tank 001', fuelPercentage: 75, lastUpdated: new Date()},
    {name: 'Tank 002', fuelPercentage: 45, lastUpdated: new Date()},
    {name: 'Tank 003', fuelPercentage: 85, lastUpdated: new Date()}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getFuelBarColor(fuelPercentage: number): string {
    if (fuelPercentage >= 75) {
      return '#4CAF50';
    } else if (fuelPercentage >= 50) {
      return '#FFC107';
    } else {
      return '#F44336';
    }
  }

  getFuelGaugePath(): string {
    const start = this.polarToCartesian(100, 55, 45, -90);
    const end = this.polarToCartesian(100, 55, 45, 90);
    const largeArcFlag = '0';
    const sweepFlag = '1';
    const d = [
      'M', start.x, start.y,
      'A', 45, 45, 0, largeArcFlag, sweepFlag, end.x, end.y
    ].join(' ');
    return d;
  }

  polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }

  getFuelGaugeCircumference(): number {
    const radius = 45;
    return Math.PI * radius;
  }

  getStrokeDashoffset(fuelPercentage: number): number {
    const circumference = this.getFuelGaugeCircumference();
    return circumference * (1 - fuelPercentage / 100);
  }

  getFuelInLiters(): number {
    const maxCapacity = 2000;
    return (this.fuelPercentage / 100) * maxCapacity;
  }
}
