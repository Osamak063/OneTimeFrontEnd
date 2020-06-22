import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { LookupService } from 'src/app/services/lookup/lookup.service';
import { forkJoin } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PlaceOrderResolver implements Resolve<any> {
    constructor(private lookupService: LookupService) { }
    resolve() {
        return forkJoin([this.lookupService.GetProductTypes(),this.lookupService.GetCities()]);
    }
} 