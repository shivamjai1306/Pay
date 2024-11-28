import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../order';
import { Observable } from 'rxjs';
import { PaymentResponse } from '../PaymentResponse';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  apiUrl="http://localhost:9191";

  constructor( private http:HttpClient) { }



  public addOrder(order:Order):Observable<PaymentResponse>{
    return this.http.post<PaymentResponse>(`${this.apiUrl}/stripe/create`,order)
      }
    
}
