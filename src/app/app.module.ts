import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainListComponent } from './contain-list/contain-list.component';
import { ContainAddComponent } from './contain-add/contain-add.component';
import { ContainEditComponent } from './contain-edit/contain-edit.component';
import { ContainDeleteComponent } from './contain-delete/contain-delete.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ContainListComponent,
    ContainAddComponent,
    ContainEditComponent,
    ContainDeleteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }