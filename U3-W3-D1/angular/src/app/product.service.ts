import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products';
  private favorites: any[] = [];
  private cart: any[] = [];

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  addToFavorites(product: any): void {
    this.favorites.push(product);
  }

  getFavorites(): any[] {
    return this.favorites;
  }

  removeFromFavorites(product: any): void {
    const index = this.favorites.indexOf(product);
    if (index !== -1) {
      this.favorites.splice(index, 1);
    }
  }

  addToCart(product: any): void {
    this.cart.push(product);
  }

  getCart(): any[] {
    return this.cart;
  }
}
