import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styleUrl: './cartitems.component.css'
})
export class CartitemsComponent {

  constructor(private cartservice:CartService, private pay:PaymentService){}

  product:any[] =[];
  grandTotal : number = 0;


  ngOnInit():void {
    this.cartservice.getProducts().subscribe(res => {
      this.product = res;
      this.grandTotal = this.cartservice.getTotalPrice();
      // console.log(this.grandTotal);
    })
    // console.log(this.product);
  }

  removeItem(item: any) {
    return this.cartservice.removeCartItem(item);
  }
  EmptyCart() {
    this.cartservice.removeAllCart();
  }
  checkout() {
    this.pay.proceedtopay(this.product);
  }
}
