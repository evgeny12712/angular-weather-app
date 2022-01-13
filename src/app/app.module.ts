import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { ItemsListComponent } from './cmps/items-list/items-list.component';
import { ItemsPreviewComponent } from './cmps/items-preview/items-preview.component';
import { ItemDetailsComponent } from './pages/item-details/item-details.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WeatherSearchComponent } from './cmps/weather-search/weather-search.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    ItemsListComponent,
    ItemsPreviewComponent,
    ItemDetailsComponent,
    HomePageComponent,
    WeatherSearchComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
