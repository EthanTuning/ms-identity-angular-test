import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({

  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']

})

export class LoginFormComponent implements OnInit {

  title = 'Login';

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {



  }

  loginWithMsal() {

    this.authService.loginWithMsal();
    this.router.navigate(['confirmation']);

  }

  loginWithOutMsal() {



  }

}
