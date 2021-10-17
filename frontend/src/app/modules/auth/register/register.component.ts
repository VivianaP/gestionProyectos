import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FactoryService } from 'src/app/services/factory.service';
import Swal from  'sweetalert2';

interface Compania {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  usuario: any = {};
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  companias: any = [];

  constructor(public factory: FactoryService, private router: Router) { }


  ngOnInit(): void {
    this.cargarCompania();  
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Email no valido' : '';
  }

  registrar(){
    if(!this.usuario.cedula || !this.usuario.nombre || !this.usuario.email || !this.usuario.password
      || !this.usuario.telefono ||  !this.usuario.direccion ||  !this.usuario.compania){
      return alert("Llenar datos vacios");
    }
    console.log(this.usuario);

    this.factory.post('usuario/registrar', this.usuario).subscribe(
      (response: any) => {
        console.log('crear usuario',response);

        Swal.fire({
          title: 'OK!',
          text: 'Registro exitoso',
          icon: 'success',
          confirmButtonText: 'ok'
        });
        this.usuario = {};
        this.router.navigate(['auth/login']);
      },
      (error: any) => {
        console.log(error);
        Swal.fire({
          title: 'Error!',
          text: 'Error al crear el usuario',
          icon: 'error',
          confirmButtonText: 'ok'
        });
      }
    );
  }

  cargarCompania(){
    this.factory.get('compania').subscribe(
      (response: any) => {
        console.log('companias',response);
        this.companias = response;
      },
      (error: any) => {
        console.log(error);
      }
      
    );
  }
}
