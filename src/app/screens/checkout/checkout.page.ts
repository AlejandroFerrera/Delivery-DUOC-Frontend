import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item.model';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  cartItems$: Observable<CartItem[]>;
  totalAmount$: Observable<number>;

  constructor(
    private cartService: CartService,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.totalAmount$ = this.cartService.getTotalAmount();
    this.cartItems$ = this.cartService.getCart();
  }

  confirmOrder() {
    this.orderService.sendOrderDetails().subscribe();
  }
}
