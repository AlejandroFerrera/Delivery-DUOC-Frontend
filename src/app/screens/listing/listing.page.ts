import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant';
import { mockRestaurants } from 'src/app/mocks/mock-restaurants';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {

  restaurants: Restaurant[];

  constructor() { }

  ngOnInit() {
    this.restaurants = mockRestaurants;
  }

}
