import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  private orders: Order[] = [
    { id: 1, customerName: 'Customer 1', orderDate: new Date(), status: 'Pending' },
    { id: 2, customerName: 'Customer 2', orderDate: new Date(), status: 'Shipped' },
    // Add more mock data as needed
  ];

  getOrders(): Observable<Order[]> {
    return of(this.orders);
  }

  getOrder(id: number): Observable<Order | undefined> {
    return of(this.orders.find(order => order.id === id));
  }

  updateOrderStatus(id: number, newStatus: string): void {
    const index = this.orders.findIndex(order => order.id === id);
    if (index !== -1) {
      this.orders[index].status = newStatus;
    }
  }

  deleteOrder(id: number): void {
    this.orders = this.orders.filter(order => order.id !== id);
  }
}
export interface Order {
  id: number;
  customerName: string;
  orderDate: Date;
  status: string;
}
