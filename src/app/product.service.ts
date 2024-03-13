import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }


  private products: Product[] = [
    { id: 1, name: 'Product 1', category: 'Category 1', price: 10.99, stockQuantity: 100 },
    { id: 2, name: 'Product 2', category: 'Category 2', price: 19.99, stockQuantity: 50 },
    // Add more mock data as needed
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProduct(id: number): Observable<Product | undefined> {
    return of(this.products.find(product => product.id === id));
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  updateProduct(updatedProduct: Product): void {
    const index = this.products.findIndex(product => product.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(product => product.id !== id);
  }
}
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stockQuantity: number;
}
