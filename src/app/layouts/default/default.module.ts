import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DasboardComponent } from 'src/app/modules/dasboard/dasboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatTableModule, MatButtonModule, MatExpansionModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { UserRequestsComponent } from './user-requests/user-requests.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/angular-material.module';

@NgModule({
  declarations: [
    DefaultComponent,
    DasboardComponent,
    UserRequestsComponent,
    PlaceOrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatTableModule,
    MatButtonModule,
    MatExpansionModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    AngularMaterialModule,
    MatInputModule
  ]
})
export class DefaultModule { }
