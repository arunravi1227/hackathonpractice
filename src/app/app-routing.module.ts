import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollageComponent } from './collage/collage.component';
import { EndComponent } from './end/end.component';
import { OfficeComponent } from './office/office.component';
import { RegisterComponent } from './register/register.component';
import { SchoolComponent } from './school/school.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'school',
    component: SchoolComponent
  },
  {
    path:'collage',
    component:CollageComponent
  },
  {
    path:'office',
    component:OfficeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'end',
    component:EndComponent
  },
  {
    path:'',      
    redirectTo:'register',     
    pathMatch:'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
