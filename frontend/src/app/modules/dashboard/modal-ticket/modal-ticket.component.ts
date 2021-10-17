import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FactoryService } from 'src/app/services/factory.service';
import Swal from  'sweetalert2';

interface Estado {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-modal-ticket',
  templateUrl: './modal-ticket.component.html',
  styleUrls: ['./modal-ticket.component.scss']
})
export class ModalTicketComponent implements OnInit {

  estados: Estado[] = [
    {value: 'activo-0', viewValue: 'Activo'},
    {value: 'proceso-1', viewValue: 'En proceso'},
    {value: 'finalizado-2', viewValue: 'Finalizado'}
  ];

  public idRuta : any = '';
  ticket: any = {};

  constructor(public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any, public factory: FactoryService, private activateRouter: ActivatedRoute,private router: Router,) { }

  ngOnInit(): void {
    this.idRuta = this.activateRouter.snapshot.paramMap.get('id');
    
  }

  registrarTicket(){
    if(!this.ticket.nombre || !this.ticket.estado || !this.ticket.comentario){
      return alert("Llenar datos vacios");
    }
    this.ticket.ticketHistoria = this.data;
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
