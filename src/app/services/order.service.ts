import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from './cart.service';
import { Observable } from 'rxjs';
import { CartItem } from '../models/cart-item.model';
import { CartItemDTO } from '../models/cart-itemDTO.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orderUrl = 'http://127.0.0.1:8000/api/order';

  private orderDetails: CartItemDTO[] = [];

  constructor(private http: HttpClient, private cartService: CartService) {}

  sendOrderDetails() {
    this.orderDetails = []

    this.cartService.getCart().subscribe((items) => {
      items.forEach((item) => {
        const newOrderDetail: CartItemDTO = {
          id: item.id,
          quantity: item.quantity,
        };
        this.orderDetails.push(newOrderDetail);
      });
    });

    return this.http.post<CartItemDTO[]>(this.orderUrl, this.orderDetails);
  }
}
