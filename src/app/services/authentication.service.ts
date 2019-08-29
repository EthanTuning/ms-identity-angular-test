import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { User } from '../models/User.model';

@Injectable({

  providedIn: 'root'

})

export class AuthenticationService {

  loggedIn: boolean;
  user: User;

  constructor(private msAuthService: MsalService) { }

  loginWithMsal() {



  }

  loginWithOutMsal() {



  }

  logoutWithMsal() {



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
