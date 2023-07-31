import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.cart = this.productService.getCart();
  }

  removeFromCart(product: any): void {
    const index = this.cart.indexOf(product);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }
}
