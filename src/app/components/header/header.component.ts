import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.checkifloggedin();
  }

  checkifloggedin() {
    if (localStorage.getItem("id_token"))  {
      this.isLoggedIn = true;
    }
    else this.isLoggedIn = false;
    
  }
  onSubmit() {
    this.authService.logout();
    
  }

  onClick() {
    this.router.navigate([`/profile/get-profile/${localStorage.getItem("UserID")}`]);
  }


}
