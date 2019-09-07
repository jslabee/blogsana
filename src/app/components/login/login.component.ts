import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  email: string = '';
  password: string='';

  constructor(   //flashMessage: FlashMessagesService,

    private authService: AuthService,
     private router: Router,
   
  ) { }

  ngOnInit() {

    this.authService.getAuth().subscribe(auth => {
      if(auth) {
        this.router.navigate(['/']);
      }
    });
  }

  onSubmit() {
    this.authService.login(this.email, this.password)
      .then(res => {
        // this.flashMessage.show('You are now logged in', {
        //   cssClass: 'alert-success', timeout: 4000
        // });
        console.log("prijava deluje")
        this.router.navigate(['/']);
      })
      .catch(err => {
        console.log("napaka")
        // this.flashMessage.show(err.message, {
        //   cssClass: 'alert-danger', timeout: 4000
        // });
      });
  }

}

