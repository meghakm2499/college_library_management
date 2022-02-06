import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { event } from '../adminaddevent/event';
@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiServer = "http://localhost:5000";
  httpOptions = {
    headers: new HttpHeaders({
      // 'Content-Type': 'application/json'
      'Content-Type':'application/x-www-form-urlencoded'
    })
  }
  constructor(private httpClient: HttpClient) { }

  create(events:any): Observable<event> {
    return this.httpClient.post<event>(this.apiServer + '/api/v1/event/', events, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getById(id:any): Observable<event> {
    return this.httpClient.get<event>(this.apiServer + '/api/v1/event/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(): Observable<event[]> {
    return this.httpClient.get<event[]>(this.apiServer + '/api/v1/event/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id:any, events:any): Observable<event> {
    return this.httpClient.put<event>(this.apiServer + '/api/v1/event/' + id, JSON.stringify(events), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id:any){
    return this.httpClient.delete<event>(this.apiServer + '/api/v1/event/' + id, this.httpOptions)
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
