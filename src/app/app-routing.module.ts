import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SlideComponent } from './components/slide/slide.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { CartitemsComponent } from './components/cartitems/cartitems.component';
import { PlaceorderComponent } from './components/placeorder/placeorder.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentsuccessComponent } from './components/paymentsuccess/paymentsuccess.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { loginGuard } from './guards/login.guard';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'header', component:HeaderComponent},
  {path: 'slide', component:SlideComponent},
  {path: 'products/:category', component:ProductsComponent},
  {path: 'product/:id', component:ProductComponent},
  {path: 'cartitems', component:CartitemsComponent},
  {path: 'placeorder', component:PlaceorderComponent},
  {path: 'payment', component:PaymentComponent, canActivate:[loginGuard]},
  {path: 'paymentsuccess', component:PaymentsuccessComponent},
  {path: 'footer', component:FooterComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},

  {path: '', component:HomeComponent},
  // {path: '', component:HeaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
