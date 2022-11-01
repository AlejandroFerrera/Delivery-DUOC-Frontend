import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  cartQuantity$: Observable<number>;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartQuantity$ = this.cartService.getTotalQuantity();
  }
}
