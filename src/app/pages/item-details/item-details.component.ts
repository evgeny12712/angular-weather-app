import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable, Subscription } from 'rxjs';

import { Weather } from 'src/app/models/weather.model';
import { ItemService } from 'src/app/services/item.service';
@Component({
  selector: 'item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {
  subscription: Subscription;
  item: Weather;
  answer: String;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private itemService: ItemService
  ) {}
  onBack() {
    this.router.navigateByUrl('');
  }

  async ngOnInit(): Promise<void> {
    this.subscription = this.route.data.subscribe((data) => {
      this.item = data.item;
    });
  }

  onShouldAdopt() {
    // this.answer$ = this.itemService.shouldAdoptItem()
    // this.itemService.shouldAdoptItem().subscribe((answer) => {
    //   this.answer = answer;
    //   setTimeout(() => {
    //     this.answer = '';
    //   }, 1500);
    // });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
