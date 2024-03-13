import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit{
  productForm!: FormGroup; 
  

  constructor(
    private productService: ProductService,
    private router: Router,
    private formBuilder: FormBuilder 
    
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required], 
      category: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]], 
      stockQuantity: ['', [Validators.required, Validators.min(0)]]
    });
  }

  addProduct(): void {
    if (this.productForm.valid) {
      
      this.productService.getProducts().subscribe(products => {
        
        const newProduct: Product = {
          id: products.length + 1,
          name: this.productForm.value.name,
          category: this.productForm.value.category,
          price: this.productForm.value.price,
          stockQuantity: this.productForm.value.stockQuantity
        };

        this.productService.addProduct(newProduct);
        this.router.navigate(['/products']);
      });
    } 
    
  }
}
