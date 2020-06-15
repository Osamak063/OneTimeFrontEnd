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

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent , canActivate:[LoggedinGuard]},
  { path: 'register', component: RegisterComponent ,resolve : {productTypes : RegisterResolver}},
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
  }]  
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }