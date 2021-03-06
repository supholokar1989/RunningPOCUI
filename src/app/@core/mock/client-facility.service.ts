import { Injectable } from '@angular/core';  
import { HttpClient, HttpParams } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { ClientFacility } from '../data/client-facility';  
  
// After that we write all methods related to consume web in employee.service.ts  
 @Injectable({  
  providedIn: 'root'  
})  
  
export class ClientFacilityService { 

        url = 'https://apigateway20200519034558.azurewebsites.net/' 
     //url = 'http://localhost:8099/' 

    constructor(private http: HttpClient) { }  
  getFacilityByClientId(id): Observable<ClientFacility[]> {  
    debugger;
    return this.http.get<ClientFacility[]>(this.url + 'Client/' + id);  
  }  
}