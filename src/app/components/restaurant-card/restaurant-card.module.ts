import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RestaurantCardComponent } from './restaurant-card.component';

@NgModule({
    declarations: [RestaurantCardComponent],
    imports: [ CommonModule, IonicModule ],
    exports: [RestaurantCardComponent],
})
export class RestaurantCardModule {}