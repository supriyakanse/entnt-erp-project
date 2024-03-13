import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../product.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit{
  productForm!: FormGroup; // Define FormGroup

  constructor(
    private productService: ProductService,
    private router: Router,
    private formBuilder: FormBuilder // Inject FormBuilder
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required], // Apply validators
      category: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]], // Add a minimum value validation
      stockQuantity: ['', [Validators.required, Validators.min(0)]]
    });
  }

  addProduct(): void {
    if (this.productForm.valid) {
      // If the form is valid, proceed with adding the product
      this.productService.getProducts().subscribe(products => {
        // Ensure the new product has a unique ID
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
    } else {
      // If the form is not valid, display error messages or take appropriate action
      // You can access individual form controls' validity like this:
      if (this.productForm.controls['name'].invalid) {
        // Handle invalid name field
      }
      // Similarly, handle other fields' validity as required
    }
  }
}
