import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicMenuComponent } from './layout/public-menu/public-menu.component';
import { PrivateMenuComponent } from './layout/private-menu/private-menu.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContainerComponent } from './layout/container/container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { LoginComponent } from './layout/login/login.component';
import { AboutComponent } from './layout/about/about.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { GaleryComponent } from './layout/galery/galery.component';
import { CrudComponent } from './layout/crud/crud.component';
import { ProfileComponent } from './layout/profile/profile.component'
import { AUTH_PROVIDERS } from './auth.service';
import { LoggedInGuard } from './logged-in.guard';


@NgModule({
  declarations: [
    AppComponent,
    PublicMenuComponent,
    PrivateMenuComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    LoginComponent,
    AboutComponent,
    DashboardComponent,
    GaleryComponent,
    CrudComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
  ],
  providers: [AUTH_PROVIDERS, LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
