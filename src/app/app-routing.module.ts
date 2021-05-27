import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/private/admin/users/users.component';
import { DashboaredComponent } from './components/private/shared/dashboard/dashboared.component';
import { DefectsComponent } from './components/private/shared/defects/defects.component';
import { FpyComponent } from './components/private/shared/fpy/fpy.component';
import { ProductsComponent } from './components/private/shared/products/products.component';
import { ProfileComponent } from './components/private/shared/profile/profile.component';
import { ReportingComponent } from './components/private/shared/reporting/reporting.component';
import { SidebarComponent } from './components/private/shared/sidebar/sidebar.component';
import { ErrorComponent } from './components/public/error/error.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { ResetComponent } from './components/public/reset/reset.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "error",
    pathMatch: "full"
  },
  {
    path: "error",
    component:ErrorComponent
  },
  {
    path: "login",
    component: LoginComponent
  },

  {
    path: "sidebar",
    component: SidebarComponent
  },
  {
    path: "dashboard",
    component:DashboaredComponent
  },
  {
    path:"defects",
    component:DefectsComponent
  },
  {
    path:"products",
    component:ProductsComponent
  },
  {
    path:"users",
    component:UsersComponent
  },
  {
    path:"fpy",
    component:FpyComponent
  },
  {
    path:"profile/:id",
    component:ProfileComponent
  },

  {
    path: "products",
    component:ProductsComponent
  },
  {
    path:"reset",
    component:ResetComponent
  },
  {
    path:"reporting",
    component:ReportingComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
