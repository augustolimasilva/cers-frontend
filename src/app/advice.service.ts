import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Advice } from './advice';

@Injectable({
  providedIn: 'root'
})
export class AdviceService {

  private url = 'http://localhost:8080/advice/';

  constructor(private http: HttpClient) { }

  insertAdvice(advice: object): Observable<object> {
    return this.http.post(`${this.url}`, advice);
  }

  updateAdvice(id: number, value: any): Observable<object> {
    return this.http.put(`${this.url}/${id}`, value);
  }

  listAdvice(): Observable<any> {
    return this.http.get(`${this.url}`);
  }

  getAdvice(id: number): Observable<object> {
    return this.http.get(`${this.url}/${id}`);
  }

  deleteAdvice(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
