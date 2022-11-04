import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { Restaurant } from 'src/app/models/restaurant';
import { ProductService } from 'src/app/services/product.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-detail-restaurant',
  templateUrl: './detail-restaurant.page.html',
  styleUrls: ['./detail-restaurant.page.scss'],
})
export class DetailRestaurantPage implements OnInit {
  id: number;
  restaurant: Restaurant = {
    id: 0,
    calification: 0,
    favorite: false,
    image: '',
    location: '',
    logo: '',
    title: '',
  };
  products: Product[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private restaurantService: RestaurantsService,
    private productService: ProductService,
    private router: Router
  ) {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.restaurantService.getRestaurant(this.id).subscribe((restaurant) => {
      this.restaurant = restaurant;
    });
    this.productService
      .getProductsByRestaurant(this.id)
      .subscribe((products) => {
        this.products = products;
      });
  }

  goToDetailPage(id: number) {
    this.router.navigate(['detail-product', id], {
      relativeTo: this.activatedRoute,
    });
  }
}
