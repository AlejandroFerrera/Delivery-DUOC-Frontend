import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  cartQuantity: number;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.cartService
      .getTotalQuantity()
      .subscribe((number) => (this.cartQuantity = number));
  }
}
