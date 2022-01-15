import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { storageService } from './storageService';
@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private http: HttpClient) {}

  public queryWeather(location) {
    const locationId = this._getLocationId(location) as any;
    if (locationId) {
      try {
        return this.http
          .get<{ answer: string }>(
            `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationId}?apikey=AikVyA6GWrhDgfdkt54NFwda2ilo5TUI`
          )
          .toPromise();
      } catch (error) {
        console.log('error', error);
      }
    }
    return locationId;
  }

  private _getLocationId(location: string) {
    let locations = storageService.load('locations');
    if (!locations) locations = [];
    let locationData = locations.find((loc) => loc.locationName === location);
    if (!locationData) {
      console.log('loading location data from api...');
      try {
        this.http
          .get(
            `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=AikVyA6GWrhDgfdkt54NFwda2ilo5TUI&q=${location}`
          )
          .subscribe((res: Array<Object>) => {
            if (!res.length) return null;
            locationData = { locationName: location, res };
            locations.push(locationData);
            storageService.store('locations', locations);
            return locationData.res[0].Key;
          });
      } catch (error) {
        console.log('error', error);
      }
    }
    return locationData.res[0].Key;
  }

  private _isLocationExists(location: string) {}

  // private _isFavoriteLocation(location: string) {
  //   let favorites = storageService.load('favorites');
  //   if (!favorites) favorites = [];
  //   else {
  //     const neededLocation = favorites.find((favorite) => {
  //       favorite.location = location;
  //     });
  //     return neededLocation;
  //   }
  // }
  // http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=AikVyA6GWrhDgfdkt54NFwda2ilo5TUI&q=tel-aviv
  // }
}
