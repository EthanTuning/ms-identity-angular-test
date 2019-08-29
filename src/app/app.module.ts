import 'hammerjs';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { MsalModule, MsalInterceptor } from '@azure/msal-angular';

import { AppMaterialModule } from './app.material.module';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './views/login-form/login-form.component';
import { ConfirmationComponent } from './views/confirmation/confirmation.component';
import { AuthenticationService } from './services/authentication.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AppMaterialModule,
    MsalModule.forRoot({
      clientID: '1a6573f0-b4e1-4639-8cfe-0f0d93e1ba3d',
      authority: 'https://login.microsoftonline.com/common/',
      validateAuthority: true,
      redirectUri: 'http://localhost:4200/confirmation',
      cacheLocation : 'localStorage',
      postLogoutRedirectUri: 'http://localhost:4200/',
      popUp: true,
      unprotectedResources: ['https://www.microsoft.com/en-us/'],
      piiLoggingEnabled: true
    })
  ],
  providers: [AuthenticationService,
    {provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
