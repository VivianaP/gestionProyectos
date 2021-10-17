import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FactoryService } from 'src/app/services/factory.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.scss']
})
export class ProyectoComponent implements OnInit {

  public proyectos : any = '';
  public idRuta : any = '';

  constructor(
    private activateRouter: ActivatedRoute,
    private router: Router,
    public factory: FactoryService
  ) { }

  ngOnInit(): void {
    
    this.idRuta = this.activateRouter.snapshot.paramMap.get('id');
    if(!this.idRuta){
      this.router.navigate(['compania']);
    }

    this.cargarProyectos(this.idRuta);
  }

  cargarProyectos(id: any){
    this.factory.get('proyecto?proyectoCompania=' + id).subscribe(
      (response: any) => {
        console.log(response, "hola");
        this.proyectos = response;
      },
      (error: any) => {
        console.log(error);
      }
      
    );
  }

}
