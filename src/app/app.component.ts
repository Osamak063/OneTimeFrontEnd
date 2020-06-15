import { Component, OnInit } from '@angular/core';
import { LoginsharedService } from './services/loginshared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-material-login-template';

  constructor(private router: Router,private loginService: LoginsharedService) { }
  ngOnInit() {
    this.loginService.change.subscribe(()=>{
      this.router.navigate(['/dashboarddefault'])
        .then(success => console.log('navigation success?' , success))
        .catch(console.error); 
    });
  }

  
}
