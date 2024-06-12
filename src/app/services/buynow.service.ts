import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class BuynowService {

  constructor() { }

  cartItemList:any[]=[];
  productList = new BehaviorSubject<any>([]);

  buynow(product:any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
  }

  getProduct() {
    return this.productList.asObservable();
  }
}
