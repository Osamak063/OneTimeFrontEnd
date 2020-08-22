import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { LookupService } from 'src/app/services/lookup/lookup.service';
import { forkJoin } from 'rxjs';
import { OrderService } from 'src/app/services/orders/order.service';

@Injectable({
    providedIn: 'root'
})
export class GetOrdersResolver implements Resolve<any> {
    constructor(private lookupService: LookupService,private orderService: OrderService) { }
    resolve() {
        return forkJoin([this.lookupService.GetOrderStatuses(),this.orderService.getAllOrders(0)]);
    }
} 