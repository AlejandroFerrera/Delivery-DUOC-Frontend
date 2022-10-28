import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant';
import { Router } from '@angular/router';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {

  restaurants: Restaurant[];

  constructor(private router: Router, private restaurantService: RestaurantsService) { }

  ngOnInit() {
    this.restaurants = this.restaurantService.getRestaurants();
  }

  goToDetailPage(id: number) {
    console.log(id)
    this.router.navigate(['detail-restaurant', id]);
  }
}
