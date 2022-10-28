import { Component, Input, OnInit, Output } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss'],
})
export class RestaurantCardComponent implements OnInit {

  @Input() restaurant?: Restaurant;
  @Output() clicked = new EventEmitter();


  constructor() { }

  ngOnInit() {}

}
