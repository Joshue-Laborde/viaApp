import { Component, OnInit } from '@angular/core';
import { loadTranslations } from '@angular/localize';
import { IUsuarios } from '../interfaces/usuarios.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  usuario1:string|null=""

  constructor() { }

  ngOnInit(): void {

    this.usuario1=localStorage.getItem('usuario')
  }
}
