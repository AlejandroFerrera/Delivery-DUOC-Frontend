import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailRestaurantPageRoutingModule } from './detail-restaurant-routing.module';

import { DetailRestaurantPage } from './detail-restaurant.page';
import { ProductCardModule } from 'src/app/components/product-card/product-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailRestaurantPageRoutingModule,
    ProductCardModule,
  ],
  declarations: [DetailRestaurantPage],
})
export class DetailRestaurantPageModule {}
