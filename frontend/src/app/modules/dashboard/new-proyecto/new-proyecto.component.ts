import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FactoryService } from 'src/app/services/factory.service';
import Swal from  'sweetalert2';



@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.scss']
})
export class NewProyectoComponent implements OnInit {

  panelOpenState = false;
  
  proyecto: any = {};
  public idRuta : any = '';


  

  constructor(public factory: FactoryService, private activateRouter: ActivatedRoute,private router: Router,) { }

  ngOnInit(): void {
    this.idRuta = this.activateRouter.snapshot.paramMap.get('id');
    if(!this.idRuta){
      this.router.navigate(['compania']);
    }

  }

  registrarProyecto(){
    this.proyecto.proyectoCompania = this.idRuta;
    console.log(this.idRuta, "ho");
    this.factory.post('proyecto', this.proyecto).subscribe(
      (response: any) => {
        console.log('crear proyecto',response);
        Swal.fire({
          title: 'OK!',
          text: 'Registro exitoso',
          icon: 'success',
          confirmButtonText: 'ok'
        });
      },

      this.proyecto = {},
      (error: any) => {
        console.log(error);
      }
    );
  }

}
