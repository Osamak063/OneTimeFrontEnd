import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { UserRequest } from 'src/app/models/user/user-model';

@Component({
  selector: 'app-user-requests',
  templateUrl: './user-requests.component.html',
  styleUrls: ['./user-requests.component.css']
})
export class UserRequestsComponent implements OnInit {
  UserRequestsList: UserRequest[]
  displayedColumns: string[] = ['name', 'compName', 'contactNumber', 'email', 'shipmentsPerWeek',
    'cnicNumber', 'address', 'accountNumber', 'websiteUrl', 'productType','actions'];
  constructor(private activatedRoute: ActivatedRoute, private authService: AuthenticationService) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(res => {
      console.log(res);
      this.UserRequestsList = res.UserRequestsList;
      console.log(this.UserRequestsList);
    });
  }

  approveRegistration(id: number) {
    console.log(id);
    this.authService.approveRegistration(id).subscribe(res=>{
      console.log('approved successfully');
      this.authService.getAllRegistrationRequests().subscribe((res : UserRequest[])=>{
        this.UserRequestsList = res;
      },error=>{
        console.log('error fetching registration requests');
      });
    },error=>{
      console.log(error);
    });
  }

  rejectRegistration(id: number) {
    this.authService.rejectRegistration(id).subscribe(res=>{
      console.log('reject successfully');
      this.authService.getAllRegistrationRequests().subscribe((res : UserRequest[])=>{
        this.UserRequestsList = res;
      },error=>{
        console.log('error fetching registration requests');
      });
    },error=>{
      console.log(error);
    });
  }

}
