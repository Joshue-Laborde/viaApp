import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogueoComponent } from './login/logueo/logueo.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './login/registro/registro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListadoComponent } from './producto/listado/listado.component';
import { NuevoComponent } from './producto/nuevo/nuevo.component';
import { EditarComponent } from './producto/editar/editar.component';
import { ListaEmpleadoComponent } from './empleado/lista-empleado/lista-empleado.component';
import { VerEmpleadoComponent } from './empleado/ver-empleado/ver-empleado.component';
import { SeguridadGuard } from './seguridad.guard';

const route: Routes=[
  {
    path:'login',
    component:LogueoComponent
  },
  {
    path: '',
    component: LogueoComponent,
    pathMatch: 'full'
  },
  {
    path:'registro',
    component:RegistroComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'listado',
    component:ListadoComponent
  },
  {
    path:'nuevo',
    component:NuevoComponent,
    canActivate:[SeguridadGuard]
  },
  {
    path:'editar/:id',
    component:EditarComponent,
    canActivate:[SeguridadGuard]
  },
  {
    path:'lista-empleado',
    component:ListaEmpleadoComponent
  },
  {
    path:'ver-empleado/:id',
    component:VerEmpleadoComponent,
    canActivate:[SeguridadGuard]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(route)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
