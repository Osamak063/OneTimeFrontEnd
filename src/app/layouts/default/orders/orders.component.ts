import { Component, OnInit } from '@angular/core';
import { GetOrder } from 'src/app/models/order/order-model';
import { ActivatedRoute } from '@angular/router';
import { error } from 'protractor';
import { OrderService } from 'src/app/services/orders/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: GetOrder[];
  orderStatuses : [];
  selectedOrderStatusId : number;
  displayedColumns: string[] = ['trackingId', 'address', 'cashOnDelivery', 'status','actions'];
  constructor(private route: ActivatedRoute,private orderService : OrderService) { }

  ngOnInit() {
    this.route.data.subscribe(res => {
      console.log(res);
      this.orderStatuses = res.ordersData[0];
      this.orders = res.ordersData[1];
      console.log(this.orders);
      console.log(this.orderStatuses);
    }, error => {
      console.log(error);
    });
  }

  updateOrderStatus(Id) {
    console.log('selected status');
    console.log(this.selectedOrderStatusId);
    this.orderService.updateOrderStatus(Id,this.selectedOrderStatusId).subscribe(res=>{
      console.log(res);
      console.log('updated succesfully.')
    },error=>{
      console.log(error);
      console.log('error while updating order');
    });
  }
}
