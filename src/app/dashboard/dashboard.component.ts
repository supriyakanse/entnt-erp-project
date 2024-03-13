import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalProducts!: number;
  totalOrders!: number;

  constructor(private productService: ProductService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.totalProducts = products.length;
    });

    this.orderService.getOrders().subscribe(orders => {
      this.totalOrders = orders.length;
    });
  }
}
