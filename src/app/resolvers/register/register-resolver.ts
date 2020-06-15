import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { LookupService } from 'src/app/services/lookup/lookup.service';
import { empty } from 'rxjs';
import { error } from 'protractor';

@Injectable({
    providedIn: 'root'
})
export class RegisterResolver implements Resolve<any> {
    constructor(private lookupService: LookupService) { }
    resolve() {
        return this.lookupService.GetProductTypes();
    }
} 