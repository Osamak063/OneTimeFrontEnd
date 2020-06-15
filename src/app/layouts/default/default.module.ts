import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DasboardComponent } from 'src/app/modules/dasboard/dasboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatTableModule, MatButtonModule } from '@angular/material';
import { UserRequestsComponent } from './user-requests/user-requests.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DasboardComponent,
    UserRequestsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class DefaultModule { }
