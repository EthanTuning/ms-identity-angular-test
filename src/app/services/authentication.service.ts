import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { User } from '../models/User.model';

@Injectable({

  providedIn: 'root'

})

export class AuthenticationService {

  loggedIn: boolean;
  user: User;

  constructor(private msalAuthService: MsalService) { }

  loginWithMsal() {

    this.msalAuthService.loginPopup();
    this.loggedIn = true;

  }

  loginWithOutMsal() {


  }

  logoutWithMsal() {

    this.msalAuthService.logout();
    this.loggedIn = false;

  }

  logoutWithOutMsal() {



  }

  getUser() {

    return this.user;

  }

  checkLogin() {

    return this.loggedIn;

  }

}
