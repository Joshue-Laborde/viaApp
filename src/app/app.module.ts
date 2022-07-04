import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogueoComponent } from './login/logueo/logueo.component';
import { AppRoutingModule } from './app.routing.module';
import { RegistroComponent } from './login/registro/registro.component';
import{ReactiveFormsModule, FormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListadoComponent } from './producto/listado/listado.component';
import { HttpClientModule } from '@angular/common/http';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { NuevoComponent } from './producto/nuevo/nuevo.component';
import { EditarComponent } from './producto/editar/editar.component';
import { ListaEmpleadoComponent } from './empleado/lista-empleado/lista-empleado.component';
import { VerEmpleadoComponent } from './empleado/ver-empleado/ver-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    LogueoComponent,
    RegistroComponent,
    DashboardComponent,
    ListadoComponent,
    NuevoComponent,
    EditarComponent,
    ListaEmpleadoComponent,
    VerEmpleadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbPaginationModule,
    NgbAlertModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
