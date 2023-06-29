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
import { IndexUserComponent } from './dashboard/users/index-user/index-user.component';
import { EditUserComponent } from './dashboard/users/edit-user/edit-user.component';
import { AuthGuard } from './services/middleware/auth.guard';
import { IsAdminGuard } from './services/middleware/is-admin.guard';

const routes: Routes = [
  // Routing untuk authentication
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },

  // Routing untuk landing page
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'driver', component: DriversComponent },


  // Routing untuk dashboard
  {
    path: 'dashboard',
    children: [
      { path: '', component: IndexComponent },
      { path: 'cars', component: CarsIndexComponent },
      { path: 'users', component: IndexUserComponent },
      { path: 'users/:id', component: EditUserComponent },
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
