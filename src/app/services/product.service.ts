import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  private urlProductsByRestaurants = 'http://127.0.0.1:8000/api/restaurants/';
  private urlProduct = 'http://127.0.0.1:8000/api/product/';

  getProductsByRestaurant(idRestaurant: number): Observable<Product[]> {
    return this.http.get<Product[]>(
      this.urlProductsByRestaurants + idRestaurant + '/products'
    );
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this.urlProduct + id);
  }
}
