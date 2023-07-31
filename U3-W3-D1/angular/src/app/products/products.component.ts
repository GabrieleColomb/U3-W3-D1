
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (response: any) => {
        if (Array.isArray(response.products)) {
          this.products = response.products;
          console.log('Risposta dell\'API:', response);
        } else {
          console.error('L\'API non ha restituito un array di prodotti valido:', response);
        }
      },
      (error) => {
        console.error('Errore durante la chiamata all\'API:', error);
      }
    );
  }

  addToFavorites(product: any): void {
    this.productService.addToFavorites(product);
  }

  addToCart(product: any): void {
    this.productService.addToCart(product);
  }
}


