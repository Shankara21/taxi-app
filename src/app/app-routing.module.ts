import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './dashboard/index/index.component';
import { CarsIndexComponent } from './dashboard/cars/cars-index/cars-index.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterComponent } from './auth/register/register.component';
import { AboutComponent } from './pages/about/about.component';
import { DriversComponent } from './pages/drivers/drivers.component';
import { BookComponent } from './pages/book/book.component';
import { ReserveComponent } from './pages/reserve/reserve.component';
import { RideComponent } from './pages/ride/ride.component';
import { OrderComponent } from './pages/order/order.component';
import { OrderStatusComponent } from './pages/order-status/order-status.component';
import { IndexUserComponent } from './dashboard/users/index-user/index-user.component';
import { EditUserComponent } from './dashboard/users/edit-user/edit-user.component';
import { AuthGuard } from './services/middleware/auth.guard';
import { IsAdminGuard } from './services/middleware/is-admin.guard';
import { ShowDriverComponent } from './dashboard/drivers/show-driver/show-driver.component';
import { EditDriverComponent } from './dashboard/drivers/edit-driver/edit-driver.component';
import { IndexDriverComponent } from './dashboard/drivers/index-driver/index-driver.component';
import { HistoryOrderComponent } from './pages/history-order/history-order.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { EditComponent } from './pages/edit/edit.component';
import { DriverEditComponent } from './pages/edit-driver/edit-driver.component';
import { ProfileDriverComponent } from './pages/profile-driver/profile-driver.component';
import { OngoingComponent } from './pages/ongoing/ongoing.component';
import { IsCustomerGuard } from './services/middleware/is-customer.guard';
import { IndexScheduledComponent } from './dashboard/scheduled/index-scheduled/index-scheduled.component';
import { IndexTransactionsComponent } from './dashboard/transactions/index-transactions/index-transactions.component';
import { IndexOrdersComponent } from './dashboard/orders/index-orders/index-orders.component';
import { IsDriverGuard } from './services/middleware/is-driver.guard';

const routes: Routes = [
  // Routing untuk authentication
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },

  // Routing untuk landing page
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'driver', component: DriversComponent, canActivate: [AuthGuard, IsCustomerGuard] },
  { path: 'ride', component: RideComponent },
  { path: 'book', component: BookComponent , canActivate:[AuthGuard]},
  { path: 'reserve', component: ReserveComponent, canActivate:[AuthGuard] },
  { path: 'order', component: OrderComponent, canActivate:[AuthGuard] },
  { path: 'status', component: OrderStatusComponent, canActivate:[AuthGuard] },
  { path: 'history', component: HistoryOrderComponent, canActivate:[AuthGuard] },
  { path: 'profile', component: ProfilesComponent , canActivate:[AuthGuard, IsCustomerGuard]},
  { path: 'profile/edit', component: EditComponent, canActivate:[AuthGuard, IsCustomerGuard] },
  { path: 'profile-driver', component: ProfileDriverComponent, canActivate:[AuthGuard, IsDriverGuard] },
  { path: 'profile-driver/edit', component: DriverEditComponent, canActivate:[AuthGuard, IsDriverGuard] },
  { path: 'ongoing', component: OngoingComponent, canActivate:[AuthGuard, IsDriverGuard] },
  // Routing untuk dashboard
  {
    path: 'dashboard',
    children: [
      { path: '', component: IndexComponent },
      { path: 'cars', component: CarsIndexComponent },
      { path: 'drivers', component: IndexDriverComponent },
      { path: 'drivers/:id', component: ShowDriverComponent },
      { path: 'drivers/edit/:id', component: EditDriverComponent },
      { path: 'users', component: IndexUserComponent },
      { path: 'users/:id', component: EditUserComponent },
      { path: 'scheduled', component: IndexScheduledComponent },
      { path: 'transactions', component: IndexTransactionsComponent },
      { path: 'orders', component: IndexOrdersComponent },
    ],
    canActivate: [AuthGuard, IsAdminGuard]
  },


  //! taruh di paling bawah
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
