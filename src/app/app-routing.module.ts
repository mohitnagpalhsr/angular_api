import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainAddComponent } from './contain-add/contain-add.component';
import { ContainDeleteComponent } from './contain-delete/contain-delete.component';
import { ContainEditComponent } from './contain-edit/contain-edit.component';
import { ContainListComponent } from './contain-list/contain-list.component';
import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';

export const routes: Routes = [
  {path:'contain-list',component:ContainListComponent},
  {path:'contain-add',component:ContainAddComponent},
  {path:'edit/:id',component:ContainEditComponent},
  {path:'delete/:id',component:ContainDeleteComponent},
  {path:'login',component:LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//{path:'edit/:id',component:EditempComponent,canActivate:[AuthGuard]}