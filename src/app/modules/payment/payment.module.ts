import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaymentComponent} from "./components/payment/payment.component";
import {provideRouter, RouterOutlet} from "@angular/router";
import {paymentRoutes} from "./payment.routes";


@NgModule({
  declarations: [
    PaymentComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet
  ],
  providers:[
    provideRouter(paymentRoutes)
  ]
})
export class PaymentModule {
}
