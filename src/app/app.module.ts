import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { ResetComponent } from './components/public/reset/reset.component';
import {MatDatepickerModule} from '@angular/material/datepicker';

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
import {NgxPaginationModule} from 'ngx-pagination';
import {MatDialogModule} from '@angular/material/dialog';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import {
  ToastrModule,
  ToastNoAnimation,
  ToastNoAnimationModule
} from 'ngx-toastr';
import { UpdateUserComponent } from './components/private/admin/update-user/update-user.component';

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
    UpdateUserComponent,
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OwlDateTimeModule, OwlNativeDateTimeModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule,
    NgxChartsModule,
    ToastNoAnimationModule.forRoot(),
    NgxPaginationModule,
    MatDialogModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[UpdateUserComponent]
})
export class AppModule { }
