import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item.model';
import { ShippingPrice } from 'src/app/models/shipping.model';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  cartItems$: Observable<CartItem[]>;
  totalAmount: number = 0;
  shippingPrice: number = 0;
  commissionValue: number = 0;

  constructor(
    private cartService: CartService,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.cartItems$ = this.cartService.getCart();

    this.orderService
      .getRandomShippingPrice()
      .subscribe((data: ShippingPrice) => {
        this.shippingPrice = data.price;
      });

    this.cartService.getTotalAmount().subscribe((total) => {
      this.totalAmount = total;
      this.commissionValue = total * 0.03;
    });
  }

  confirmOrder() {
    this.orderService.sendOrderDetails().subscribe();
  }
}
