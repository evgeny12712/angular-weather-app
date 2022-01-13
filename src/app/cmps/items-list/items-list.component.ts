import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather.model';

@Component({
  selector: 'items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent implements OnInit {
  @Input() weather: Weather;
  @Output() onRemove = new EventEmitter<string>();
  forecast: Object;
  constructor() {}

  ngOnInit(): void {
    this.forecast = this.weather.DailyForecasts;
  }
}
