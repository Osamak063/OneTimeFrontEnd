import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from 'src/app/models/order/order-model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  placeOrder(order: Order) {
    const header = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post("https://localhost:5001/api/Orders/PlaceOrder",
      JSON.stringify(order), { headers: header });
  }

  getAllOrders(trackingId: number) {
    return this.httpClient.get(`https://localhost:5001/api/Orders/GetAllOrders/${trackingId}`);
  }

  updateOrderStatus(orderId: number, orderStatusId: number) {
    return this.httpClient.put(`https://localhost:5001/api/Orders/ChangeOrderStatus/${orderId}/${orderStatusId}`,
      null);
  }

  getOrderByTrackingId(trackingId : number){
    return this.httpClient.get(`https://localhost:5001/api/Orders/GetOrderByTrackingId/${trackingId}`);
  }

}
