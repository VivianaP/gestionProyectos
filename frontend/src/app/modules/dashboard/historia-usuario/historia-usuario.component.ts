import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FactoryService } from 'src/app/services/factory.service';
import { ModalHistoriaComponent } from '../modal-historia/modal-historia.component';
import { ModalTicketComponent } from '../modal-ticket/modal-ticket.component';
import Swal from  'sweetalert2';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface PeriodicElement {
  name: string;
  comentarios: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  
];


@Component({
  selector: 'app-historia-usuario',
  templateUrl: './historia-usuario.component.html',
  styleUrls: ['./historia-usuario.component.scss']
})
export class HistoriaUsuarioComponent implements OnInit {
  static openDialog(): any {
    throw new Error('Method not implemented.');
  }

  historias : any = [];
  tickets : any = [];

  public proyectos : any = '';

  panelOpenState = false;
  public idRuta : any = '';
  historiaUsuario: any = {};

  displayedColumns: string[] = [ 'nombre', 'obser',  'email', 'acciones'];
  dataSource = ELEMENT_DATA;
  static idRuta: any;

  constructor(public dialog: MatDialog, private activateRouter: ActivatedRoute,
    private router: Router, public factory: FactoryService){ }

  ngOnInit(): void {
    this.idRuta = this.activateRouter.snapshot.paramMap.get('id');
    if(!this.idRuta){
      this.router.navigate(['compania']);
    }
    this.cargarHistorias();
    this.cargarProyectos(this.idRuta);
  }

  openDialog() {
      
      const dialogHistoria = this.dialog.open(ModalHistoriaComponent, {
        data: this.idRuta

    });

    dialogHistoria.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.cargarHistorias();
    });
  }

  openDialog2(id : any) {
    const dialogTicket = this.dialog.open(ModalTicketComponent, {
      data: id
    });
    dialogTicket.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.cargarHistorias();
    });
  }

  cargarHistorias(){
    this.factory.get('historiaUsuario?proyectoHistoria=' + this.idRuta).subscribe(
      (response: any) => {
        console.log('compañias',response);
        this.historias = response;
        this.historias.forEach((historia:any) => {
          this.cargarTicket(historia.id);
        });
      },
      (error: any) => {
        console.log(error);
      }
      
    );
  }

  cargarTicket(id : any){
    this.factory.get('ticket?ticketHistoria=' + id).subscribe(
      (response: any) => {
        this.historias.tickets = response;
      },
      (error: any) => {
        console.log(error);
      }
      
    );
  }


  cargarProyectos(id: any){
    this.factory.get('proyecto/' + this.idRuta).subscribe(
      (response: any) => {
        console.log(response, "hola");
        this.proyectos = response;
      },
      (error: any) => {
        console.log(error);
      }
      
    );
  }


  public actualizarEstado(id : any, estado : string){
    
    console.log(this.historiaUsuario);
    this.factory.put('ticket/'+ id, {estado: estado}).subscribe(
      (response: any) => {
        console.log('actualizar estado',response);
        Swal.fire({
          title: 'OK!',
          text: 'Actualización exitoso',
          icon: 'success',
          confirmButtonText: 'ok'
        });
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  


}
