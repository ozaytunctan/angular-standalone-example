import {Routes} from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {ShoppingCartComponent} from "./pages/shopping-cart/shopping-cart.component";
import {ConversationComponent} from "./pages/conversation/conversation.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path:"conversation/:consId",
    component:ConversationComponent
  },

  {
    path: 'cart',
    component: ShoppingCartComponent
  },
  {
    path: 'payment',
    loadChildren: () =>
      import('./modules/payment/payment.module')
        .then(m => m.PaymentModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }


];
