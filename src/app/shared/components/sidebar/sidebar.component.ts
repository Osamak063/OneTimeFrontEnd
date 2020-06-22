import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { MenuItem } from 'src/app/models/dashboard/menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  private userInfo: any;
  private MenuItems: MenuItem[];
  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.userInfo = this.authService.getNameAndEmail();
    const role = this.authService.getRole();
    if (role === 'DataEntryOperator') {
      this.MenuItems = [
        {
          name: 'Registration Requests',
          navigation: 'user-requests'
        },
        {
          name: 'Orders',
          navigation: ''
        }
      ];
    }
    else if (role == 'Client') {
      this.MenuItems = [
        {
          name: 'Place Order',
          navigation: 'place-order'
        }];
    }
    else if (role == 'Admin') {
      this.MenuItems = [{ name: 'Account Management', navigation: '' }];
    }
  }

}
