import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', redirectTo: '/products' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
