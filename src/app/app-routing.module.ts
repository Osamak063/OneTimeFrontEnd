import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DasboardComponent } from './modules/dasboard/dasboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { RegisterResolver } from './resolvers/register/register-resolver';
import { UserRequestsComponent } from './layouts/default/user-requests/user-requests.component';
import { UserRequestsResolver } from './resolvers/register/user-requests-resolver';
import { AuthGuard } from './helpers/auth.guard';
import { LoggedinGuard } from './helpers/loggedin.guard';
import { PlaceOrderComponent } from './layouts/default/place-order/place-order.component';
import { PlaceOrderResolver } from './resolvers/orders/place-order-resolver';
import { OrdersComponent } from './layouts/default/orders/orders.component';
import { GetOrdersResolver } from './resolvers/orders/get-orders-resolver';
import { DisplayOrderComponent } from './components/display-order/display-order.component';
import { DisplayOrderResolver } from './resolvers/orders/display-order-resolver';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent , canActivate:[LoggedinGuard]},
  { path: 'register', component: RegisterComponent ,resolve : {productTypes : RegisterResolver}},
  { path: 'display-order', component: DisplayOrderComponent ,resolve : {orderData : DisplayOrderResolver}},
  { path: 'dashboarddefault',component: DefaultComponent,
  children: [{
    path: '',
    component : DasboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user-requests',
    component : UserRequestsComponent,
    resolve : {UserRequestsList : UserRequestsResolver},
    canActivate: [AuthGuard]
  },
  {
    path: 'place-order',
    component : PlaceOrderComponent,
    resolve : {placeOrderRequiredData : PlaceOrderResolver},
    canActivate: [AuthGuard]
  },{
    path: 'orders',
    component : OrdersComponent,
    resolve : {ordersData : GetOrdersResolver},
    canActivate: [AuthGuard]
  }]  
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }