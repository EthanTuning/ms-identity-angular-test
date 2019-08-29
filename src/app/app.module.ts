import 'hammerjs';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { MsalModule } from '@azure/msal-angular';

import { AppMaterialModule } from './app.material.module';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './views/login-form/login-form.component';
import { ConfirmationComponent } from './views/confirmation/confirmation.component';

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
      clientID: '1a6573f0-b4e1-4639-8cfe-0f0d93e1ba3d'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
