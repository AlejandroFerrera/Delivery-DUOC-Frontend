import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'detail-restaurant/:id',
    loadChildren: () =>
      import('./screens/detail-restaurant/detail-restaurant.module').then(
        (m) => m.DetailRestaurantPageModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'detail-product',
    loadChildren: () => import('./screens/detail-product/detail-product.module').then( m => m.DetailProductPageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./screens/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./screens/registro/registro.module').then( m => m.RegistroPageModule)
  },  {
    path: 'checkout',
    loadChildren: () => import('./screens/checkout/checkout.module').then( m => m.CheckoutPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
