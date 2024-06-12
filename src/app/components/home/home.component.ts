import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../../services/shopping.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private shopping:ShoppingService){}

  products:any[] = [];

  ngOnInit():void {
    this.shopping.GetProducts().subscribe(data => this.products = data);
    console.log(this.products);
  }

}
