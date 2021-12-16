import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { LoginComponent } from './components/pages/login/login.component';
import { OrdermenuComponent } from './components/pages/ordermenu/ordermenu.component';
import { OrdernowComponent } from './components/pages/ordernow/ordernow.component';
import { PagenotfoundComponent } from './components/pages/pagenotfound/pagenotfound.component';
import { RegistrationComponent } from './components/pages/registration/registration.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'dashboard', component:DashboardComponent, children:[
    {path:'ordermenu', component:OrdermenuComponent},
    {path:'ordernow', component:OrdernowComponent},
  ]},

  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
