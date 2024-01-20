import {ApplicationConfig} from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withComponentInputBinding,
  withPreloading,
  withRouterConfig
} from '@angular/router';

import {routes} from './app.routes';
import {coreProviders} from "./core/services/core.providers";
import {provideHttpClient, withJsonpSupport, withXsrfConfiguration} from "@angular/common/http";


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withJsonpSupport(),withXsrfConfiguration(
      {
        cookieName:'sessionId',
        headerName:'BELEDIYE_TOKEN'
      }
    )),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withRouterConfig({paramsInheritanceStrategy: 'always'}),
      withPreloading(PreloadAllModules),
      //withDebugTracing()
    ),
    //importProvidersFrom(PaymentModule),
    ...coreProviders
  ]
};
