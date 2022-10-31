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
  restaurant: Restaurant;
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
    this.restaurant = this.restaurantService.getRestaurant(this.id);
    this.products = this.productService.getProducts();
    console.log(this.products);
  }

  goToDetailPage(id: number) {
    this.router.navigate(['detail-product', id], {
      relativeTo: this.activatedRoute,
    });
  }
}
