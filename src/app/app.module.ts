import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
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
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
