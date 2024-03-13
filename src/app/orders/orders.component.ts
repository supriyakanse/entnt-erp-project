import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order, OrderService } from '../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{
  orders!: Order[];

  constructor(private router: Router, private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders;
    });
  }

  viewOrderDetails(orderId: number): void {
    this.router.navigate(['/orders', orderId]);
  }






 
}
