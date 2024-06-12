import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }
  ngOnInit():void {

  }

  proceed:any[] = [];
  amount: number = 0;
  proceedto = new BehaviorSubject([]);

  proceedtopay(product: any) {
    this.proceed.push(product);
    this.proceedto.next(product);

  }

  getProductToProceed() {
    return this.proceedto.asObservable();
  }
}
