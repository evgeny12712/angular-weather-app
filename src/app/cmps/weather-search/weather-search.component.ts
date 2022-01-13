import { query } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Weather } from 'src/app/models/weather.model';
import { ItemService } from 'src/app/services/item.service';
import { storageService } from 'src/app/services/storageService';

@Component({
  selector: 'weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss'],
})
export class WeatherSearchComponent {
  location: string;
  subscription: Subscription;
  weather: any;
  isNoLocation = false;
  @Output() weatherEvent = new EventEmitter();
  constructor(private itemService: ItemService) {}

  async onSearch() {
    this.weather = await this.itemService.queryWeather(this.location);
    if (this.weather && !Array.isArray(this.weather)) {
      this.weatherEvent.emit(this.weather);
      this.isNoLocation = false;
    } else this.isNoLocation = true;
  }
}
