import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Studentinfo } from './_models/studentinfo.models';
import { Queryansinfo } from './_models/queryansinfo.models';
import { Queryinfo } from './_models/queryinfo.models';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { FooterComponent } from './footer/footer.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminafterloginComponent } from './adminafterlogin/adminafterlogin.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { UserafterloginComponent } from './userafterlogin/userafterlogin.component';
import { GiveansComponent } from './giveans/giveans.component';
import { AddqueryComponent } from './addquery/addquery.component';
import { SearchqueryComponent } from './searchquery/searchquery.component';
import { AnsqueryComponent } from './ansquery/ansquery.component';
import { AdminviewalluserComponent } from './adminviewalluser/adminviewalluser.component';
import { SearchuserbyadminComponent } from './searchuserbyadmin/searchuserbyadmin.component';
import { ViewallqueryComponent } from './viewallquery/viewallquery.component';
import { DeletuserbyadminComponent } from './deletuserbyadmin/deletuserbyadmin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    UserloginComponent,
    FooterComponent,
    AdminloginComponent,
    AdminafterloginComponent,
    UserregistrationComponent,
    UserafterloginComponent,
    GiveansComponent,
    AddqueryComponent,
    SearchqueryComponent,
    AnsqueryComponent,
    AdminviewalluserComponent,
    SearchuserbyadminComponent,
    ViewallqueryComponent,
    DeletuserbyadminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [Studentinfo,Queryansinfo,Queryinfo],
  bootstrap: [AppComponent]
})
export class AppModule { }
