import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { User } from '../../interfaces/empleados-interface';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { take, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-ver-empleado',
  templateUrl: './ver-empleado.component.html',
  styleUrls: ['./ver-empleado.component.css']
})
export class VerEmpleadoComponent implements OnInit {

  empleado:User={
    firstName: '',
    lastName:'',
    image:'',
    email: ''
  }

  empleado1!:Observable<User>

  constructor(private api:ApiService,  private activateRoute:ActivatedRoute, private location:Location) { }

  ngOnInit(): void {
    this.cargar();
  }

  cargar(){
    /* this.activateRoute.params.pipe(take(1)).subscribe((params)=>{
      const id=params['id'];
      this.empleado1=this.api.verEmpleado(id);
    }); */

    /* this.activateRoute.params.pipe(
      switchMap(({id})=>this.api.verEmpleado(id))
    )
    .subscribe(emp=>this.empleado=emp) */

    this.activateRoute.params.subscribe(
      e=>{
        let id=e['id']
        if(id){
          console.log(id)
            this.api.verEmpleado(id).subscribe(
              emp=>{this.empleado=emp
                console.log(emp)}

            )
        }
      }
    )
  }

  onGoBack():void{
    this.location.back()
  }

}
