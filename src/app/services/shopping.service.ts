import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(private http:HttpClient) { }

  GetCategories():Observable<string[]> {
    return this.http.get<string[]>('https://fakestoreapi.com/products/categories');

  }

  GetProducts():Observable<any[]> {
    return this.http.get<any[]>("https://fakestoreapi.com/products");
  }
  ngOnInit():void {

  }
}
