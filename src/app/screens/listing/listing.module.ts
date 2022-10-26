import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingPageRoutingModule } from './listing-routing.module';

import { ListingPage } from './listing.page';
import { SearchbarModule } from 'src/app/components/searchbar/searchbar.module';
import { RestaurantCardModule } from 'src/app/components/restaurant-card/restaurant-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingPageRoutingModule,
    SearchbarModule,
    RestaurantCardModule
  ],
  declarations: [ListingPage]
})
export class ListingPageModule {}
