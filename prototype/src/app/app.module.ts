import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import { MaterialModule } from './layouts/material.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './layouts/auth/create-user/create-user.component';
import { LoginComponent } from './layouts/auth/login/login.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AdminLayoutModule,
    AppRoutingModule,
    MaterialModule
  ],
  declarations: [
    AppComponent,
    CreateUserComponent,
    LoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
