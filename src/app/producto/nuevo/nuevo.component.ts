import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Product, IProductos } from '../../interfaces/productos.interface';
import {Location} from '@angular/common'

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

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

  productos:Product[]=[]

  nuevoForm: FormGroup=this.fb.group({
    title: ['',[Validators.required , Validators.maxLength(100)]],
    category: ['', [Validators.required]],
    price: ['',[Validators.required,  Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    stock: ['',[Validators.required,  Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
  })
  constructor(private api:ApiService, private router:Router, private location:Location, private fb: FormBuilder) { }

  campoValido(campo:string)
    {
      return this.nuevoForm.controls[campo].errors && this.nuevoForm.controls[campo].touched
    }

  ngOnInit(): void {
  }

  guardar(form:any){
    if(form){
      this.api.agregarProducto(form).subscribe(resp=>{
        let result:Product=resp;
        console.log(result);
        alert("Se agreggó con éxito")
        this.router.navigate(['listado'])
        })
    }else{
      console.log(form)
      return alert('Existen campos vacios. Llenelos por favor')
    }
    }

  volver():void{
    this.location.back();
  }

  }

