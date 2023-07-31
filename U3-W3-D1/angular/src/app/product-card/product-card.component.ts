import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product: any;
  @Output() addToFavorites = new EventEmitter<any>();
  @Output() addToCart = new EventEmitter<any>();

  onAddToFavorites(): void {
    this.addToFavorites.emit(this.product);
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
