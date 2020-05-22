import { Injectable } from '@angular/core';  
import { HttpClient, HttpParams } from '@angular/common/http';   
import { Observable, throwError } from 'rxjs';  
import { RuleExecutionErrorInfo } from '../data/Rule-Error';  
import { map, catchError } from 'rxjs/operators'; 
  
 
 @Injectable({  
  providedIn: 'root'  
})  
  
export class RuleExecutionErrorInfoService { 
   // url = 'http://localhost:30003/api/' 
     //url = 'http://localhost:8099/' 
     url = 'https://apigateway20200519034558.azurewebsites.net/'
    constructor(private httpClient: HttpClient) {}
    getRuleErrorbyVisitID(id) {
      debugger;
      return this.httpClient.get(this.url + 'qa/PatientVisitId/' + id).
          pipe(
             map((data: RuleExecutionErrorInfo[]) => {
               return data;
             }), catchError( error => {
               return throwError( 'Something went wrong!' );
             })
        )
    }

      getRuleErrorbyClientID(id) {
        debugger;
        return this.httpClient.get(this.url + 'qa/' + id).
            pipe(
               map((data: RuleExecutionErrorInfo[]) => {
                 return data;
               }), catchError( error => {
                 return throwError( 'Something went wrong!' );
               })
            )
        }

        getRuleError() {
          debugger;
            return this.httpClient.get(this.url + 'qa').
                pipe(
                   map((data: any[]) => {
                     return data;
                     debugger;
                   }), catchError( error => {
                     debugger;
                     return throwError( 'Something went wrong!' );
                   })
                )
            //return this.httpClient.get<RuleExecutionErrorInfo[]>(this.url + 'qa');
            debugger;
            }
  }