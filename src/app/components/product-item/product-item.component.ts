import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input()
  product?: Product;

  ngOnInit(): void {}
}
