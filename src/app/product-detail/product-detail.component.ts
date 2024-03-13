import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  productId!: number;
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:any) => {
      this.productId = +params.get('id');
      this.productService.getProduct(this.productId).subscribe((product:any) => {
        this.product = product;
      });
    });
  }

  updateProduct(): void {
    this.productService.updateProduct(this.product);
    this.router.navigate(['/products']);
  }

  deleteProduct(): void {
    this.productService.deleteProduct(this.productId);
    this.router.navigate(['/products']);
  }
}
