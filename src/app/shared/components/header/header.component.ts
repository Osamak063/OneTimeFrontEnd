import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output()  toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private router:Router,private authService:AuthenticationService) { }

  ngOnInit() {
  }

  toggleSidebar(){
    this.toggleSideBarForMe.emit();
  }

  signOut(){
    this.authService.logout();
    this.router.navigate(['/login'])
        .then(success => console.log('navigation success?' , success))
        .catch(console.error); 
  }
}
