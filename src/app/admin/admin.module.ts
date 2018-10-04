import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { MainAdminPanelComponent } from './main-admin-panel/main-admin-panel.component';
import { ResourcesAdministrationComponent } from './resources-administration/resources-administration.component';
import { UsersAdministrationComponent } from './users-administration/users-administration.component';

const adminRoutes: Route[] = [
  { path: 'admin', 
    component: MainAdminPanelComponent,
    children: [
      { path: 'users', component: UsersAdministrationComponent },
      { path: 'resources', component: ResourcesAdministrationComponent }
    ]
  }  
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [
    MainAdminPanelComponent, 
    ResourcesAdministrationComponent,
    UsersAdministrationComponent
  ]
})
export class AdminModule { }
