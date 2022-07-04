import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { IUsuarios } from '../interfaces/usuarios.interface';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProductos, Product } from '../interfaces/productos.interface';
import { environment } from '../../environments/environment';
import { User, IEmpleado } from '../interfaces/empleados-interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _usuario: IUsuarios[]=[
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

  private baseUrl:string=environment.baseUrl;

  // -------------- USUARIOS -------------------------
  get Usuarios():IUsuarios[]{
    return [...this._usuario];
  }

  registrarUsuario(usuario: IUsuarios){
    this._usuario.push(usuario);
  }


  // ------------ PRODUCTOS ---------------------


  constructor(private http:HttpClient) { }

  listarProductos():Observable<IProductos[]>{
    return this.http.get<IProductos[]>(`${this.baseUrl}/products?&limit=10`)
    //return this.http.get<IProductos[]>(`${this.baseUrl}/products`)

  }

  agregarProducto(producto: Product):Observable<Product>{
    return this.http.post<Product>(`${this.baseUrl}/products/add`,producto);
  }

  editarProducto(producto:Product):Observable<Product>{
    console.log(producto);
    return this.http.put<Product>(`${this.baseUrl}/products/${producto.id}`,producto);
  }

  obtenerProducto(id:number):Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/products/${id}`)
  }


  //-------------EMPLEADOS ------------------------
  listarEmpleados():Observable<IEmpleado[]>{
    return this.http.get<IEmpleado[]>(`${this.baseUrl}/users?&limit=10`)
  }

  verEmpleado(id:number){
    return this.http.get<User>(`${this.baseUrl}/users/${id}`);
  }

}
