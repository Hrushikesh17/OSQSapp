import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminafterloginComponent } from './adminafterlogin/adminafterlogin.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { UserafterloginComponent } from './userafterlogin/userafterlogin.component';
import { GiveansComponent } from './giveans/giveans.component';
import { AddqueryComponent } from './addquery/addquery.component';
import { SearchqueryComponent } from './searchquery/searchquery.component';
import { AdminviewalluserComponent } from './adminviewalluser/adminviewalluser.component';
import { SearchuserbyadminComponent } from './searchuserbyadmin/searchuserbyadmin.component';
import { ViewallqueryComponent } from './viewallquery/viewallquery.component';
import { DeletuserbyadminComponent } from './deletuserbyadmin/deletuserbyadmin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'adminlogin',
    component: AdminloginComponent
  },
  {
    path: 'userlogin',
    component: UserloginComponent
  },
  {
    path: 'adminafterlogin',
    component: AdminafterloginComponent
  },
  {
    path: 'userregistration',
    component: UserregistrationComponent
  },
  {
    path: 'userafterlogin',
    component: UserafterloginComponent
  },
  {
    path:'addquery',
    component: AddqueryComponent
  },
  {
    path: 'giveans',
    component: GiveansComponent
  },
  {
    path: 'searchquery',
    component: SearchqueryComponent
  },
  {
    path: 'adminviewalluser',
    component: AdminviewalluserComponent
  },
  {
    path: 'searchuser',
    component: SearchuserbyadminComponent
  },
  {
    path: 'viewallquery',
    component: ViewallqueryComponent
  },
  {
    path: 'deletuserbyadmin',
    component: DeletuserbyadminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
