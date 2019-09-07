import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../services/blog.service';
import { AuthService } from '../../services/auth.service';
import{Router,ActivatedRoute,Params} from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  loggedInUser: string;
  showRegister: boolean;

  constructor(
    private blogService: BlogService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if(auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  onLogoutClick() {
    this.authService.logout();
    console.log("odjavljeni ste")
    // this.flashMessage.show('You are now logged out', {
    //   cssClass: 'alert-success', timeout: 4000
    // });
    this.router.navigate(['/login']);
  }

}
