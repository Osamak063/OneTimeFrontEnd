import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  pwd: string;
  username: string;
  showError: boolean = false;
  ErrorMessage: string = "";
  trackingId: string = "";
  showTrackingIdError: boolean = false;
  trackingIdErrorMessage : string = "";
  constructor(
    private router: Router,
    private authService: AuthenticationService) { }

  ngOnInit() {
  }

  onLoginAction() {

    if (this.pwd !== '' && this.username !== '') {
      this.authService.login(this.username, this.pwd).subscribe(res => {
        console.log('success login');
        this.authService.setSession(res);
        this.router.navigate(['/dashboarddefault'])
          .then(success => console.log('navigation success?', success))
          .catch(console.error);
      },
        (error) => {
          if (error.status == 401)
            this.ErrorMessage = "Invalid Username or Password.";
          this.showError = true;
        });
    }
    else {
      this.ErrorMessage = "Please enter Username and Password.";
      this.showError = true;
    }
  }

  onRegisterAction() {
    this.router.navigate(['/register'])
      .then(success => console.log('navigation success?', success))
      .catch(console.error);
  }

  onTrackAction() {
    console.log(this.trackingId);
    if (this.trackingId.length === 0) {
      this.showTrackingIdError = true;
      this.trackingIdErrorMessage = "Tracking Id required.";
      return
    }
    let navExtras: NavigationExtras = {
      queryParams: { "trackingId": this.trackingId }
    };
    this.router.navigate(['/display-order'], {queryParams : {trackingId : this.trackingId}})
      .then(success => console.log('navigation success?', success))
      .catch(()=>{
        console.error
        this.showTrackingIdError = true;
        this.trackingIdErrorMessage = "Invalid Tracking Id.";
      });
  }

}
