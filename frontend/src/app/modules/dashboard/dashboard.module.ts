
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { MenuListItemComponent } from './side-main/ui/menu-list-item/menu-list-item.component';
import { SideMainComponent } from './side-main/side-main.component';
import { MaterialModule } from 'src/app/material/material.module';
import { DashboardComponent } from './dashboard.component';
import { CompaniaComponent } from './compania/compania.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { HistoriaUsuarioComponent } from './historia-usuario/historia-usuario.component';
import { NewCompaniaComponent } from './new-compania/new-compania.component';
import { NewProyectoComponent } from './new-proyecto/new-proyecto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalHistoriaComponent } from './modal-historia/modal-historia.component';
import { ModalTicketComponent } from './modal-ticket/modal-ticket.component';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    SideMainComponent,
    MenuListItemComponent,
    CompaniaComponent,
    ProyectoComponent,
    HistoriaUsuarioComponent,
    NewCompaniaComponent,
    NewProyectoComponent,
    ModalHistoriaComponent,
    ModalTicketComponent,
    UsuarioComponent,

    
  ],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,

  ],

})
export class DashboardModule { }
