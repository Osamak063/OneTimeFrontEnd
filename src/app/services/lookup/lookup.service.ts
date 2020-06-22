import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  constructor(private httpClient: HttpClient) { }

  GetProductTypes() {
    return this.httpClient.get("https://localhost:5001/api/Lookup/GetProductTypeList");
  }

  GetCities(){
    return this.httpClient.get("https://localhost:5001/api/Lookup/GetCitiesList");
  }
}
