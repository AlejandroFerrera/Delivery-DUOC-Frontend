import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

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
    private toastCtrl: ToastController
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
      name: this.product.title,
      price: this.product.price,
      image: this.product.image,
      quantity: 1,
    };

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
      duration: 1000,
      position: 'top',
    });

    toast.present();
  }
}
