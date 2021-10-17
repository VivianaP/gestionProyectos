import { Component, OnInit } from '@angular/core';
import { FactoryService } from 'src/app/services/factory.service';
import Swal from  'sweetalert2';


@Component({
  selector: 'app-new-compania',
  templateUrl: './new-compania.component.html',
  styleUrls: ['./new-compania.component.scss']
})
export class NewCompaniaComponent implements OnInit {

  compania: any = {};

  constructor(public factory: FactoryService) { }

  ngOnInit(): void {
  }

  registrar(){
    console.log(this.compania);
    if(!this.compania.nit || !this.compania.nombre || !this.compania.email || !this.compania.telefono ||  !this.compania.direccion ){
      return alert("Llenar datos vacios");
    }

    this.factory.post('compania', this.compania).subscribe(
      (response: any) => {
        console.log('crear compania',response);
        
        Swal.fire({
          title: 'OK!',
          text: 'Registro exitoso',
          icon: 'success',
          confirmButtonText: 'ok'
        });
        
      },
      this.compania = {},
      (error: any) => {
        console.log(error);
      }
    );
  }

}
