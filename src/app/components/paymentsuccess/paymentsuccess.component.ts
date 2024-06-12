import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-paymentsuccess',
  templateUrl: './paymentsuccess.component.html',
  styleUrl: './paymentsuccess.component.css'
})
export class PaymentsuccessComponent {
  constructor(private pay:PaymentService){}

  success:any=[];
  Amount:number = 0;

  ngOnInit():void {
    this.pay.getProductToProceed().subscribe(res => {
      this.success = res;
      // console.log(res);
    })
  }
}
