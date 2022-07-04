import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { User } from '../../interfaces/empleados-interface';

@Component({
  selector: 'app-lista-empleado',
  templateUrl: './lista-empleado.component.html',
  styleUrls: ['./lista-empleado.component.css']
})
export class ListaEmpleadoComponent implements OnInit {

  empleados:User[]=[]

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.mostrarEmpleados();
  }

  private mostrarEmpleados():void{
    this.api.listarEmpleados().subscribe((res:any)=>{
      const{users}=res;
      this.empleados=[...this.empleados, ...users]
    })
  }

}
