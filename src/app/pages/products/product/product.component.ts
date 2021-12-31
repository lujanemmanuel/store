import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  @Output() addToCart = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }

  buy(){
    this.addToCart.emit(this.product);
  }

}
