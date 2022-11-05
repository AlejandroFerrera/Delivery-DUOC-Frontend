import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartItems$: Observable<CartItem[]>;
  totalAmount$: Observable<number>;
  cartQuantity: number;

  constructor(
    private cartService: CartService,
    private alertCtrl: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.cartItems$ = this.cartService.getCart();
    this.totalAmount$ = this.cartService.getTotalAmount();
    this.cartService
      .getTotalQuantity()
      .subscribe((number) => (this.cartQuantity = number));
  }

  onIncrease(item: CartItem) {
    this.cartService.changeQty(1, item.id);
  }

  onDecrease(item: CartItem) {
    if (item.quantity === 1) {
      this.removeFromCart(item);
      return;
    }

    this.cartService.changeQty(-1, item.id);
  }

  async removeFromCart(item: CartItem) {
    const alert = await this.alertCtrl.create({
      mode: 'ios',
      header: 'Eliminar',
      message: 'Se eliminará el producto del carrito',
      buttons: [
        {
          text: 'Si',
          handler: () => this.cartService.removeItem(item.id),
        },
        {
          text: 'No',
        },
      ],
    });
    alert.present();
  }

  goToCheckout() {
    this.router.navigate(['checkout'])
  }
}
