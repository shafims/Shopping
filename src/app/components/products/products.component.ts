import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../../services/shopping.service';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  constructor(private shopping:ShoppingService, private router:ActivatedRoute){}

  products:any[] = [];

  categoryName:string | null = null;

  ngOnInit():void {

    this.categoryName = this.router.snapshot.paramMap.get("category");
    // console.log(this.categoryName);

    this.shopping.GetProducts().subscribe(data => {
      this.products = data.filter(product => product.category == this.categoryName);
    })

  }
}
