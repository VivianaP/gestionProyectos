import { Component, OnInit } from '@angular/core';
import { FactoryService } from 'src/app/services/factory.service';
import Swal from  'sweetalert2';

export interface PeriodicElement {
  
  nit: string;
  nombre: string;
  telefono: string;
  direccion: string;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [

];

@Component({
  selector: 'app-compania',
  templateUrl: './compania.component.html',
  styleUrls: ['./compania.component.scss']
})
export class CompaniaComponent implements OnInit {
  
  

  displayedColumns: string[] = ['nit', 'nombre', 'telefono', 'direccion', 'email', 'proyecto', 'acciones'];
  dataSource = ELEMENT_DATA;

  constructor(public factory: FactoryService) { }

  ngOnInit(): void {
    this.cargarCompania();
  }

  compania: any = {};

    cargarCompania(){
      
      this.factory.get('compania').subscribe(
        (response: any) => {
          console.log('compañias',response);
          this.dataSource = response;
          
        },
        (error: any) => {
          console.log(error);
        }
        
      );
    }

    
}
