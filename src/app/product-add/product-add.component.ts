import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit{
  newProduct: Product = { id: 0, name: '', category: '', price: 0, stockQuantity: 0 };

  constructor(private productService: ProductService, private router: Router) {}
ngOnInit(): void {
  
}
  addProduct(): void {
    this.productService.getProducts().subscribe(products => {
      // Ensure the new product has a unique ID
      this.newProduct.id = products.length + 1;

      this.productService.addProduct(this.newProduct);
      this.router.navigate(['/products']);
    });
  }
}
