import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { Product } from '../../interfaces/productos.interface';
import {Location} from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  categorias=[
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting"
  ]

  producto: Product={
    title: '',
    price: 0,
    stock: 0,
    category: ''
  }


  nuevoForm: FormGroup = this.fb.group({
    title: ['',[Validators.required , Validators.maxLength(100)]],
    category: ['', [Validators.required]],
    price: ['',[Validators.required,  Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    stock: ['',[Validators.required,  Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
  })



  constructor(private api:ApiService, private activatedRoute: ActivatedRoute, private router: Router, private location:Location, private fb: FormBuilder) { }

  campoValido(campo:string)
    {
      return this.nuevoForm.controls[campo].errors && this.nuevoForm.controls[campo].touched
    }


  ngOnInit(): void {
    this.cargar();
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      p=>{
        let id=p['id']
        if(id){
          console.log(id)
            this.api.obtenerProducto(id).subscribe(
              prod=>{this.producto=prod
                console.log(prod)}

            )
        }
      }
    )
  }

  actualizarProducto(){
    console.log(this.producto.id)
    if(this.producto.id){
      this.api.editarProducto(this.producto).subscribe(
        resp=>{this.router.navigate(['listado'])},
        error => {console.log(error)}
      )
    }
}

volver():void{
  this.location.back();
}
}
