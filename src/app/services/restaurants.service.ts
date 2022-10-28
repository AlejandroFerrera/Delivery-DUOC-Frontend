import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  getRestaurants(): Restaurant[] {
    return [
      {
        id: 1,
        title: 'Little Caesars',
        location: 'Plaza Egaña',
        logo:
          'data:image/jpeg;base64,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',
        image: 'https://st.depositphotos.com/2252541/2379/i/600/depositphotos_23796179-stock-photo-pizza-margherita.jpg',
        calification: 3.3,
        favorite: false,
      },

      {
        id: 2,
        title: "Domino's Pizza",
        location: 'La Reina',
        logo:
          'https://pbs.twimg.com/profile_images/1019244199735160832/2i7cVJ03_400x400.jpg',
        image:
        'https://st.depositphotos.com/2252541/2379/i/600/depositphotos_23796179-stock-photo-pizza-margherita.jpg',
        calification: 4.4,
        favorite: false,
      },

      {
        id: 3,
        title: "McDonald's",
        location: 'Las Condes',
        logo:
          'https://www.mcdonalds.cl/images/layout/mcdonalds-logo-bg-red.png',
          image:
          'https://www.unileverfoodsolutions.com.mx/tendencias/hellmanns/hamburguesas/tendencias-hamburguesas/jcr:content/parsys/set1/row2/span12/image.img.png/1644307577616.png',
        calification: 2.3,
        favorite: false,
      },
    ];
  }

  getRestaurant(id: number): Restaurant {
    return this.getRestaurants().find((restaurant) => (restaurant.id === id));
  }

  constructor() {}
}