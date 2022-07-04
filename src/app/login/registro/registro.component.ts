import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { IUsuarios } from '../../interfaces/usuarios.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nuevo:IUsuarios={
    usuario:"",
    correo:"",
    rol:"standar",
    clave:""
  }

  loginForm: FormGroup= this.fb.group({
    usuario:  ['',[Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    correo:  ['', [Validators.required, Validators.email]],
    rol:['standard'],
    clave:  ['',[Validators.required, Validators.minLength(8)]]
  })

  constructor(private api:ApiService ,private router:Router, private fb: FormBuilder) { }

  campoValido(campo:string)
    {
      return this.loginForm.controls[campo].errors && this.loginForm.controls[campo].touched
    }

  ngOnInit(): void {
  }

  onRegister(form:any){
    //let nuevo=this.usuario.push(form)
    //console.log(nuevo);
    if(form){
      this.api.registrarUsuario(form);
      console.log(form)
      this.router.navigate(['login'])
    }else{
      console.log(form)
      return alert('Existen campos vacios. Por favor llenarlos')
    }

  }

}
