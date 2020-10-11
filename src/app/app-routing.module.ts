import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FranchiseComponent } from './franchise/franchise.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'home' , component:HomeComponent},
  {path:'login' , component:LoginComponent},
  {path:'franchise',component:FranchiseComponent},
  {path:'' , component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
