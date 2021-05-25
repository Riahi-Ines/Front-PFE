import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { ResetComponent } from './components/public/reset/reset.component';
import { ErrorComponent } from './components/public/error/error.component';
import { UsersComponent } from './components/private/admin/users/users.component';
import { FooterComponent } from './components/private/shared/footer/footer.component';
import { RightsideComponent } from './components/private/shared/rightside/rightside.component';
import { DashboaredComponent } from './components/private/shared/dashboard/dashboared.component';
import { ProductsComponent } from './components/private/shared/products/products.component';
import { DefectsComponent } from './components/private/shared/defects/defects.component';
import { FpyComponent } from './components/private/shared/fpy/fpy.component';
import { ProfileComponent } from './components/private/shared/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { SidebarComponent } from './components/private/shared/sidebar/sidebar.component';
import { TopbarComponent } from './components/private/shared/topbar/topbar.component';
import { ReportingComponent } from './components/private/shared/reporting/reporting.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import{HttpClientModule} from '@angular/common/http';


import {
  ToastrModule,
  ToastNoAnimation,
  ToastNoAnimationModule
} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResetComponent,
    ErrorComponent,
    UsersComponent,
    FooterComponent,
    RightsideComponent,
    DashboaredComponent,
    ProductsComponent,
    DefectsComponent,
    FpyComponent,
    ProfileComponent,
    SidebarComponent,
    TopbarComponent,
    ReportingComponent,
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OwlDateTimeModule, OwlNativeDateTimeModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
  ToastNoAnimationModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
