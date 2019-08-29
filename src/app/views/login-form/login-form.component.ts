import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({

  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']

})

export class LoginFormComponent implements OnInit {

  title = 'Login';

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {



  }

  loginWithMsal() {



  }

  loginWithOutMsal() {

    

  }

}
