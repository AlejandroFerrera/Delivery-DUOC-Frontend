import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailProductPage } from '../detail-product/detail-product.page';

import { DetailRestaurantPage } from './detail-restaurant.page';

const routes: Routes = [
  {
    path: '',
    component: DetailRestaurantPage,
  },
  {
    path: 'detail-product/:id',
    component: DetailProductPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailRestaurantPageRoutingModule {}
