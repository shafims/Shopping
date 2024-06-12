import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ShoppingService } from '../../services/shopping.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  jewelery: string ='jewelery';
  electronics: string = 'electronics';
  mensclothing:string = `men's clothing`;
  womensclothing:string =`women's clothing`;

  userEmail:string = '';
  constructor(private cartItems:CartService, private category:ShoppingService, private router:Router, private cookie:CookieService,){}
  totalItems: number = 0;

  ngOnInit():void {
    this.cartItems.getProducts().subscribe(res => {
      this.totalItems = res.length;
      console.log(this.totalItems);
      // this.userEmail = this.cookie.get('Email');
      // console.log(this.userEmail);
    });
    this.userEmail = this.cookie.get('Email');
    console.log(this.userEmail);
    // console.log(this.query);
  }

  SignOutClick(){
    this.cookie.delete('Email');
    this.router.navigate(['/login']);
  }

  query:string = '';
}
