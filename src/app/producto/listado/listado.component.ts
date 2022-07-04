import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Product } from '../../interfaces/productos.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  productos:Product[]=[]

  constructor(private api:ApiService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.mostrarProductos();
  }

  private mostrarProductos():void{
    this.api.listarProductos().subscribe((res:any)=>{
      const{products}=res;
      this.productos=[...this.productos, ...products]
    })
  }

}
