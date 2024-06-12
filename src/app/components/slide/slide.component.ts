import { Component } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.css'
})
export class SlideComponent {

  jewelery: string ='jewelery';
  electronics: string = 'electronics';
  mensclothing:string = `men's clothing`;
  womensclothing:string =`women's clothing`;

}
