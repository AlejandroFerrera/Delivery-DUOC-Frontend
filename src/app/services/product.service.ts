import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      title: 'Pizza 4 en 1',
      price: 12500,
      description:
        '¿Una pizza que lo tenga todo? ¡la tenemos! 1/4 de pepperoni, 1/4 de jamón con pimientos verdes, 1/4 de puro queso y 1/4 de champiñones con aceitunas negras, con borde relleno de queso mozzarella.',
      image:
        'https://images.rappi.cl/products/tmp51051472298589311688515287.png?e=webp&d=800x800&q=80',
    },
    {
      id: 2,
      title: 'Pizza Vegie',
      price: 8500,
      description: 'Pizza cebolla, champoñiones frescos, aceitunas y pimentones verdes',
      image:
        'https://images.rappi.cl/products/tmp51050561433984073255164382.png?e=webp&d=800x800&q=80',
    },
    {
      id: 3,
      title: 'Pizza Super Cheese 3 Meat Treat',
      price: 9500,
      description:
        'Pizza super cheese 3 meat treat pepperoni, salchicha italiana y bacon, con borde relleno de queso mozzarella. tamaño familiar.',
      image:
        'https://images.rappi.cl/products/tmp510509910282683351597625815.png?e=webp&d=800x800&q=80',
    },
    {
      id: 4,
      title: 'Extra Pepperoni',
      price: 7000,
      description: 'Pizza con extra pepperoni',
      image:
        'https://images.rappi.cl/products/tmp510498613995552456371482083.png?e=webp&d=800x800&q=80',
    },
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((product) => (product.id = id));
  }
}
