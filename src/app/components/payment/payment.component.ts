import { Component,OnInit } from '@angular/core';
import { ShoppingService } from '../../services/shopping.service';
import { CartService } from '../../services/cart.service';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

  constructor(private cart:CartService, private pay:PaymentService){}

  checkout:any = [];
  TotalAmount:number = 0;

  ngOnInit():void {
    this.cart.getProducts().subscribe(res => {
      this.checkout = res;
      // console.log(this.checkout);

      this.TotalAmount = this.cart.getTotalPrice();
      console.log(this.TotalAmount);
    })
  }

  proceedToPay() {
    this.pay.proceedtopay(this.checkout);
  }

}
