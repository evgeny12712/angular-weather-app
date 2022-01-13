import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private http: HttpClient) {}

  public async queryWeather(location) {
    let locationKey: string;
    let loc = (await this._getLocationId(location)) as any;
    if (loc && loc.length) {
      locationKey = loc[0].Key;
      try {
        return this.http
          .get<{ answer: string }>(
            `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=AikVyA6GWrhDgfdkt54NFwda2ilo5TUI`
          )
          .toPromise();
      } catch (error) {
        console.log('error', error);
      }
    }
    return loc;
  }

  private _getLocationId(location: string) {
    try {
      return this.http
        .get(
          `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=AikVyA6GWrhDgfdkt54NFwda2ilo5TUI&q=${location}`
        )
        .toPromise();
    } catch (error) {
      console.log('error', error);
    }
    return Promise.reject();
  }

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
