import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { FormsModule } from '@angular/forms';
import { ProductAddComponent } from './product-add/product-add.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductComponent,
    OrdersComponent,
    ProductDetailComponent,
    OrderDetailComponent,
    ProductAddComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
