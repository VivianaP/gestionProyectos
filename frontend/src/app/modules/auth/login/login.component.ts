import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { FactoryService } from 'src/app/services/factory.service';
import Swal from  'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  usuario: any = {};

  constructor(public factory: FactoryService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.factory.post('usuario/login', this.usuario).subscribe(
      (response: any) => {
        console.log('login',response);
        this.usuario = {};
        localStorage.setItem('usuario', JSON.stringify(response.data));
        this.factory.loadUser();
        this.router.navigate(['']);
      },
      (error: any) => {
        console.log(error);
        Swal.fire({
          title: 'Error!',
          text: 'Error al iniciar sesion',
          icon: 'error',
          confirmButtonText: 'ok'
        });
      }
    );
  }

}
