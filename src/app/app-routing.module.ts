import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './dashboard/index/index.component';
import { CarsIndexComponent } from './dashboard/cars/cars-index/cars-index.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  // Routing untuk authentication
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Routing untuk landing page
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  // Routing untuk dashboard
  {
    path: 'dashboard',
    children: [
      { path: '', component: IndexComponent },
      { path: 'cars', component: CarsIndexComponent }
    ]
  },


  //! taruh di paling bawah
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
