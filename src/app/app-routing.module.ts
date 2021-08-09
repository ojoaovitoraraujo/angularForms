import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { LoginGuard } from './authentication/login.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: ()=> import('./home/home.module').then((m)=> m.HomeModule),
    // canLoad: [LoginGuard],
  },
  {
    path: 'animals',
    loadChildren: ()=> import('./animals/animals.module').then((m) => m.AnimalsModule),
    // canLoad: [AuthenticationGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
