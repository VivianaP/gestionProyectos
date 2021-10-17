import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FactoryService } from 'src/app/services/factory.service';
import { HistoriaUsuarioComponent } from '../historia-usuario/historia-usuario.component';
import Swal from  'sweetalert2';

interface Estado {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-modal-historia',
  templateUrl: './modal-historia.component.html',
  styleUrls: ['./modal-historia.component.scss']
})
export class ModalHistoriaComponent implements OnInit {

  estados: Estado[] = [
    {value: 'activo-0', viewValue: 'Activo'},
    {value: 'proceso-1', viewValue: 'En proceso'},
    {value: 'finalizado-2', viewValue: 'Finalizado'}
  ];

  historiaUsuario: any = {};
  public idRuta : any = '';

  ticket: any = {};

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    public factory: FactoryService, 
    private activateRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    
  }


  public registrarHistoria(){
    if(!this.historiaUsuario.historia || !this.ticket.nombre || !this.ticket.estado || !this.ticket.comentario){
      return alert("Llenar datos vacios");
    }
    this.historiaUsuario.proyectoHistoria = this.data;
    console.log(this.historiaUsuario);
    this.factory.post('historiaUsuario', this.historiaUsuario).subscribe(
      (response: any) => {
        console.log('crear historia',response);
        Swal.fire({
          title: 'OK!',
          text: 'Registro exitoso',
          icon: 'success',
          confirmButtonText: 'ok'
        });
        this.dialogRef.close();
        this.registrarTicket(response.id);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  registrarTicket(idHistoria : any){
    if(!this.ticket.nombre || !this.ticket.estado || !this.ticket.comentario){
      return alert("Llenar datos vacios");
    }
    this.ticket.ticketHistoria = idHistoria;
    console.log('Ticket a registrar', this.ticket);
    this.factory.post('ticket', this.ticket).subscribe(
      (response: any) => {
        console.log('crear ticket',response);
        Swal.fire({
          title: 'OK!',
          text: 'Registro exitoso',
          icon: 'success',
          confirmButtonText: 'ok'
        });
        this.dialogRef.close();
      },
      (error: any) => {
        console.log(error);
      }
    );
    
  } 

  

}
