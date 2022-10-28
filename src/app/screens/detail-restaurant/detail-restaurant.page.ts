import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-detail-restaurant',
  templateUrl: './detail-restaurant.page.html',
  styleUrls: ['./detail-restaurant.page.scss'],
})
export class DetailRestaurantPage implements OnInit {
  id: number;
  restaurant: Restaurant;

  constructor(
    private activatedRoute: ActivatedRoute,
    private restaurantService: RestaurantsService
  ) {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.restaurant = this.restaurantService.getRestaurant(this.id);
  }
}
