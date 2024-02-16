import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectComponent } from './connect/connect.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'connect', component: ConnectComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/connect', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    ConnectComponent,
    RegisterComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }

