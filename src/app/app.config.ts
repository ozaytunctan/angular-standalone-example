import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {PreloadAllModules, provideRouter, withPreloading, withRouterConfig} from '@angular/router';

import {routes} from './app.routes';
import {coreProviders} from "./core/services/core.providers";
import {PaymentModule} from "./modules/payment/payment.module";
import {provideHttpClient, withJsonpSupport} from "@angular/common/http";


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withJsonpSupport()),
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
