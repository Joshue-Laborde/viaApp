import { Component, OnInit } from '@angular/core';
import { IUsuarios } from 'src/app/interfaces/usuarios.interface';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router'
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-logueo',
  templateUrl: './logueo.component.html',
  styleUrls: ['./logueo.component.css']
})
export class LogueoComponent implements OnInit {

   usuario: IUsuarios[]=[
    {
      usuario: 'joshue98',
      correo: 'joshue@gmail.com',
      rol: 'admin',
      clave:'admin'
    },
    {
      usuario: 'sam10',
      correo: 'sam@gmail.com',
      rol: 'standard',
      clave:'12345'
    }
  ];

  loginForm=new FormGroup({
    usuario: new FormControl('',Validators.required),
    clave: new FormControl('',Validators.required),
    rol: new FormControl('standard')
  })

  errorStatus:boolean=false;
  errorMsg:any='';

  constructor(private api:ApiService ,private router:Router) { }

  ngOnInit(): void {
      //this.onLogin(form);

  }

  onLogin(form:any){
    //let usu = this.usuario.forEach(m=>m.usuario.toString());
    console.log(this.api.Usuarios)
    this.api.Usuarios.forEach(i => {
      if(form.usuario === i.usuario && form.clave === i.clave){
        localStorage.setItem('usuario', form.usuario);
        localStorage.setItem('rol', i.rol);
        //sessionStorage.setItem('usuario',form.usuario);
        console.log(i)
        this.router.navigate(['dashboard'])
      }
      else
         this.errorStatus=true;
         this.errorMsg= 'Usuario o contraseña incorrectos';
    });
    /* const f = form.usuario;
    console.log(f);
    console.log(usu) */
  }

}
