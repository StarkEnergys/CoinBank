import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './pages/login/login.component';

export const AppRoutes: Routes = [

  {path: '',redirectTo: 'login', pathMatch: "full" },
  { path:'login', component: LoginComponent},
  

  
  


{
  path:'', 
  component: AdminLayoutComponent,
  loadChildren:() => import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule),

},
  

{path: "**", redirectTo: 'dashboard', pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }