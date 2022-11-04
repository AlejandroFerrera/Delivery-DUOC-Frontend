import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  constructor(private http: HttpClient) {}

  private apiUrlAll = 'http://localhost:8000/api/restaurants/';
  private apiUrlOne = 'http://localhost:8000/api/restaurants/';

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.apiUrlAll);
  }

  getRestaurant(id: number): Observable<Restaurant> {
    return this.http.get<Restaurant>(this.apiUrlOne + id);
  }
}
