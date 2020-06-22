import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from 'src/app/models/order/order-model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  PlaceOrder(order : Order) {
    const header = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post("https://localhost:5001/api/Orders/PlaceOrder", 
    JSON.stringify(order), { headers: header });
  }
}
