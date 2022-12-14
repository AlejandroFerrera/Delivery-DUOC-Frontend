import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items$ = new BehaviorSubject<CartItem[]>([]);
  private cartQuantity$ = new BehaviorSubject<number>(0);
  private restaurantId = 0;

  getCart() {
    return this.items$.asObservable();
  }

  isInCart(id: number): boolean {
    return Boolean(this.items$.getValue().find((item) => item.id === id));
  }

  addToCart(newItem: CartItem) {
    this.items$.next([...this.items$.getValue(), newItem]);
    this.cartQuantity$.next(this.cartQuantity$.getValue() + 1);
    this.restaurantId = newItem.restaurant_id;
  }

  resetAndAdd(newItem: CartItem) {
    this.items$.next([newItem]);
    this.cartQuantity$.next(1);
    this.restaurantId = newItem.restaurant_id;
  }

  removeItem(id: number) {
    this.items$.next(this.items$.getValue().filter((item) => item.id !== id));
    this.cartQuantity$.next(this.cartQuantity$.getValue() - 1);
  }

  changeQty(quantity: number, id: number) {
    const items = this.items$.getValue();
    const index = items.findIndex((item) => item.id === id);
    items[index].quantity += quantity;
    this.items$.next(items);
    this.cartQuantity$.next(this.cartQuantity$.getValue() + quantity);
  }

  getTotalAmount() {
    return this.items$.pipe(
      map((items) => {
        let total = 0;
        items.forEach((item) => {
          total += item.quantity * item.price;
        });

        return total;
      })
    );
  }

  getTotalQuantity() {
    return this.cartQuantity$;
  }

  isFromSameRestaurant(newItemRestaurantId: number) {
    return newItemRestaurantId === this.restaurantId;
  }

  getRestaurantCartId() {
    return this.restaurantId;
  }
}
