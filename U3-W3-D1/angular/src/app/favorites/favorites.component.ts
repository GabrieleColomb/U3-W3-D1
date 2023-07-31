import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favorites: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.favorites = this.productService.getFavorites();
  }

  removeFromFavorites(product: any): void {
    this.productService.removeFromFavorites(product);
    this.favorites = this.productService.getFavorites();
  }
}

