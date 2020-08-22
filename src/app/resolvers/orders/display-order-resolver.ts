import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LookupService } from 'src/app/services/lookup/lookup.service';
import { forkJoin } from 'rxjs';
import { OrderService } from 'src/app/services/orders/order.service';

@Injectable({
    providedIn: 'root'
})
export class DisplayOrderResolver implements Resolve<any> {
    constructor(private router: ActivatedRoute,private orderService: OrderService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
            let trackingId;
            console.log('params');
            trackingId = route.queryParams['trackingId'];
            console.log(trackingId);
            return this.orderService.getOrderByTrackingId(trackingId);
    }
    
} 