import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ItemService } from 'src/app/services/item.service';
import { Weather } from 'src/app/models/weather.model';
import { storageService } from 'src/app/services/storageService';
@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  weather: Weather;
  subscription: Subscription;

  constructor(private itemService: ItemService) {}

  onNewLocation($event) {
    if ($event) this.weather = $event;
    storageService.store('weather', this.weather);
  }

  async ngOnInit(): Promise<void> {
    this.weather = await this.itemService.queryWeather('tel aviv');
  }
}
