import { HttpClient, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

export const BASE_URL_TOKEN = 'BASE_URL_TOKEN';
@Injectable({
  providedIn: 'root'
})
export class NgonisService<T> {

  constructor(private defaultHttpClient: HttpClient,  @Inject(BASE_URL_TOKEN) private baseUrl: string) {}

  public getAll(): Observable<T[]> {
    const url = ``;
    return this.getFromUrl<T[]>(url);
  }

  public get(id: number | string): Observable<T> {
    return this.getFromUrl<T>(`/${id}`);
  }

  public post(body: T): Observable<T> {
    return this.postToUrl<T>('', body);
  }

  public update(body: T): Observable<T> {
    return this.updateToUrl<T>('', body);
  }

  public delete(id: number | string): Observable<void> {
    return this.deleteFromUrl<void>(`/${id}`);
  }

  public search(parameter: string): Observable<T[]> {
    return this.getFromUrl<T[]>(`?${parameter}`);
  }

  public getFromUrl<U>(url: string): Observable<U> {
    return this.defaultHttpClient.get<U>(`${this.baseUrl}${url}`).pipe(
      catchError(this.handleError)
    );
  }

  public postToUrl<U>(url: string, body: any): Observable<U> {
    return this.defaultHttpClient.post<U>(`${this.baseUrl}${url}`, body, {
      observe: 'response'
    }).pipe(
      map((response: HttpResponse<U>) => response.body as U),
      catchError(this.handleError)
    );
  }

  public updateToUrl<U>(url: string, body: any): Observable<U> {
    return this.defaultHttpClient.put<U>(`${this.baseUrl}${url}`, body, {
      observe: 'response'
    }).pipe(
      map((response: HttpResponse<U>) => response.body as U),
      catchError(this.handleError)
    );
  }

  public deleteFromUrl<U>(url: string): Observable<U> {
    return this.defaultHttpClient.delete<U>(`${this.baseUrl}${url}`, {
      observe: 'response'
    }).pipe(
      map((response: HttpResponse<U>) => response.body as U),
      catchError(this.handleError)
    );
  }

  public handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(error);
  }
}