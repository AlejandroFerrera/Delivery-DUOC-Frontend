import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.page.html',
  styleUrls: ['./detail-product.page.scss'],
})
export class DetailProductPage implements OnInit {

  id: number;
  product: Product;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,

    private location: Location,
  ) {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(
  ) {
    this.product = this.productService.getProduct(this.id)
  }

  goBack() {
    this.location.back()
  }
}
