import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Weather } from 'src/app/models/weather.model';

@Component({
  selector: 'items-preview',
  templateUrl: './items-preview.component.html',
  styleUrls: ['./items-preview.component.scss'],
})
export class ItemsPreviewComponent implements OnInit {
  @Input() day;
  @Output() onRemove = new EventEmitter<string>();
  imageSrc: string;
  constructor() {}

  ngOnInit(): void {
    if (this.day) {
      console.log(this.day);
      this.imageSrc = `./assets/${this.day.Day.Icon}.png`;
    }
  }
}
