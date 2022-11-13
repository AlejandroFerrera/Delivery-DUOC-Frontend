import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

import { CartItem } from 'src/app/models/cart-item.model';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.page.html',
  styleUrls: ['./detail-product.page.scss'],
})
export class DetailProductPage implements OnInit {
  id: number;
  product: Product = {
    id: 0,
    restaurant_id: 0,
    price: 0,
    title: '',
    description: '',
    image: '',
  };

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private location: Location,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private router: Router
  ) {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.productService.getProduct(this.id).subscribe((product) => {
      this.product = product;
    });
  }

  goBack() {
    this.location.back();
  }

  addItemToCart() {
    const cartItem: CartItem = {
      id: this.product.id,
      restaurant_id: this.product.restaurant_id,
      name: this.product.title,
      price: this.product.price,
      image: this.product.image,
      quantity: 1,
    };

    if (
      !this.cartService.isFromSameRestaurant(cartItem.restaurant_id) &&
      this.cartService.getRestaurantCartId() !== 0
    ) {
      this.resetCart(cartItem);
      return;
    }

    const isInCart = this.cartService.isInCart(this.id);

    isInCart
      ? this.cartService.changeQty(1, this.id)
      : this.cartService.addToCart(cartItem);

    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Producto agregado al carro',
      mode: 'ios',
      duration: 1500,
      position: 'top',
    });

    toast.onclick = () => {
      this.router.navigate(['home/cart']);
    };

    toast.present();
  }

  async resetCart(item: CartItem) {
    const alert = await this.alertCtrl.create({
      mode: 'ios',
      header: 'Vaciar carro',
      message:
        'El carro tiene productos de otro restaurante. Desea eliminarlos y agregar este?',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            this.cartService.resetAndAdd(item);
            this.presentToast();
          },
        },
        {
          text: 'No',
        },
      ],
    });
    alert.present();
  }
}
