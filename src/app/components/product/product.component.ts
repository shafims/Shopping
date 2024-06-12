import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs/internal/Observable';
import { ShoppingService } from '../../services/shopping.service';
import {ActivatedRoute} from '@angular/router';
import { BuynowService } from '../../services/buynow.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  constructor(private shopping:ShoppingService, private cartservices:CartService, private router:ActivatedRoute, private buy:BuynowService){}

  product:any[] = [];
  product1 = {};

  productId: string | null = null;

  ngOnInit():void {
    this.productId = this.router.snapshot.paramMap.get('id');
    // console.log(this.productId);

    this.shopping.GetProducts().subscribe(data => {
      this.product1 = data.find(res => res.id == this.productId);
      this.product.push(this.product1);

      this.product.forEach((a:any) => {
        Object.assign(a,{quantity:1, total:a.price});

      });
    })
  }
  AddToCart(e:any) {
    alert('Your Item is Add to cart.');
    this.cartservices.addtoCart(e);
  }
  buynow(e:any) {
    alert('Your ready to Buy this Product');
    this.buy.buynow(e);
    console.log(e);
  }

}
