import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CartitemsComponent } from './components/cartitems/cartitems.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentsuccessComponent } from './components/paymentsuccess/paymentsuccess.component';
import { PlaceorderComponent } from './components/placeorder/placeorder.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { SlideComponent } from './components/slide/slide.component';
import {HttpClientModule} from '@angular/common/http';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartitemsComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    PaymentComponent,
    PaymentsuccessComponent,
    PlaceorderComponent,
    ProductComponent,
    ProductsComponent,
    RegisterComponent,
    SlideComponent,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
