import { Component, OnInit } from '@angular/core';
import { FactoryService } from 'src/app/services/factory.service';


export interface PeriodicElement {
  
  cedula: string;
  nombre: string;
  telefono: string;
  direccion: string;
  email: string;
  compania: string;
}

const ELEMENT_DATA: PeriodicElement[] = [

];

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  
  displayedColumns: string[] = ['cedula', 'nombre', 'telefono', 'direccion', 'email', 'acciones'];
  dataSource = ELEMENT_DATA;


  constructor(public factory: FactoryService) { }

  ngOnInit(): void {
    this.cargarUsuario();
  }

  
  cargarUsuario(){
      
    this.factory.get('usuario').subscribe(
      (response: any) => {
        this.dataSource = response;
      },
      (error: any) => {
        console.log(error);
      }
      
    );
  }
}
