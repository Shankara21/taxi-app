import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { IndexComponent } from './dashboard/index/index.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { CarsIndexComponent } from './dashboard/cars/cars-index/cars-index.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarDashboardComponent } from './components/sidebar-dashboard/sidebar-dashboard.component';
import { AboutComponent } from './pages/about/about.component';
import { DriversComponent } from './pages/drivers/drivers.component';
import { IndexUserComponent } from './dashboard/users/index-user/index-user.component';
import { NavbarDashboardComponent } from './components/navbar-dashboard/navbar-dashboard.component';
import { EditUserComponent } from './dashboard/users/edit-user/edit-user.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    HomeComponent,
    NotFoundComponent,
    CarsIndexComponent,
    SidebarComponent,
    SidebarDashboardComponent,
    AboutComponent,
    DriversComponent,
    IndexUserComponent,
    NavbarDashboardComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
