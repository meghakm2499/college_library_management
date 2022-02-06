import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { meterials } from '../staffaddmeterials/meterials';
@Injectable({
  providedIn: 'root'
})
export class MeterialsService {
  private apiServer = "http://localhost:5000";
  httpOptions = {
    headers: new HttpHeaders({
      // 'Content-Type': 'application/json'
      'Content-Type':'application/x-www-form-urlencoded'
    })
  }
  constructor(private httpClient: HttpClient) { }

  create(meterialss:any): Observable<meterials> {
    return this.httpClient.post<meterials>(this.apiServer + '/api/v1/meterials/', meterialss, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getById(id:any): Observable<meterials> {
    return this.httpClient.get<meterials>(this.apiServer + '/api/v1/meterials/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(): Observable<meterials[]> {
    return this.httpClient.get<meterials[]>(this.apiServer + '/api/v1/meterials/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id:any, meterialss:any): Observable<meterials> {
    return this.httpClient.put<meterials>(this.apiServer + '/api/v1/meterials/' + id, JSON.stringify(meterialss), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id:any){
    return this.httpClient.delete<meterials>(this.apiServer + '/api/v1/meterials/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  errorHandler(error:any) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }
}
