import { Component } from '@angular/core';
import { Order, OrderService } from '../services/order.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent {
  orderId!: number;
  order!: Order;
newStatus!:string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:any) => {
      this.orderId = +params.get('id');
      this.orderService.getOrder(this.orderId).subscribe((order:any) => {
        this.order = order;
      });
    });
  }
  updateOrderStatus(): void {
    this.orderService.updateOrderStatus(this.orderId, this.newStatus);
   
    
}

  

  deleteOrder(): void {
    this.orderService.deleteOrder(this.orderId);
    this.router.navigate(['/orders']);
  }
}
