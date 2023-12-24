import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {PreloadAllModules, provideRouter, withPreloading, withRouterConfig} from '@angular/router';

import {routes} from './app.routes';
import {coreProviders} from "./core/services/core.providers";
import {PaymentModule} from "./modules/payment/payment.module";


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withRouterConfig({paramsInheritanceStrategy: 'always'}),
      withPreloading(PreloadAllModules),
      //withDebugTracing()
    ),
    //importProvidersFrom(PaymentModule),
    ...coreProviders
  ]
};
