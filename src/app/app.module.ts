// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

// Pages
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
import { BookComponent } from './pages/book/book.component';
import { ReserveComponent } from './pages/reserve/reserve.component';
import { RideComponent } from './pages/ride/ride.component';
import { OrderComponent } from './pages/order/order.component';
import { OrderStatusComponent } from './pages/order-status/order-status.component';
import { NavbarDashboardComponent } from './components/navbar-dashboard/navbar-dashboard.component';
import { IndexUserComponent } from './dashboard/users/index-user/index-user.component';
import { EditUserComponent } from './dashboard/users/edit-user/edit-user.component';
import { IndexDriverComponent } from './dashboard/drivers/index-driver/index-driver.component';
import { EditDriverComponent } from './dashboard/drivers/edit-driver/edit-driver.component';
import { ShowDriverComponent } from './dashboard/drivers/show-driver/show-driver.component';
import { HistoryOrderComponent } from './pages/history-order/history-order.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { EditComponent } from './pages/edit/edit.component';
import { ProfileDriverComponent } from './pages/profile-driver/profile-driver.component';
import { OngoingComponent } from './pages/ongoing/ongoing.component';
import { IndexScheduledComponent } from './dashboard/scheduled/index-scheduled/index-scheduled.component';
import { IndexTransactionsComponent } from './dashboard/transactions/index-transactions/index-transactions.component';
import { IndexOrdersComponent } from './dashboard/orders/index-orders/index-orders.component';
import { DriverEditComponent } from './pages/edit-driver/edit-driver.component';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarDashboardComponent,
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
    BookComponent,
    ReserveComponent,
    RideComponent,
    OrderComponent,
    OrderStatusComponent,
    IndexUserComponent,
    EditUserComponent,
    IndexDriverComponent,
    EditDriverComponent,
    ShowDriverComponent,
    HistoryOrderComponent,
    ProfilesComponent,
    EditComponent,
    ProfileDriverComponent,
    OngoingComponent,
    IndexScheduledComponent,
    IndexTransactionsComponent,
    IndexOrdersComponent,
    DriverEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
