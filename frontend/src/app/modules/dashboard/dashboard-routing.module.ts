import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from 'src/app/services/guards/user.guard';
import { CompaniaComponent } from './compania/compania.component';
import { DashboardComponent } from './dashboard.component';
import { HistoriaUsuarioComponent } from './historia-usuario/historia-usuario.component';
import { HomeComponent } from './home/home.component';
import { ModalHistoriaComponent } from './modal-historia/modal-historia.component';
import { NewCompaniaComponent } from './new-compania/new-compania.component';
import { NewProyectoComponent } from './new-proyecto/new-proyecto.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { UsuarioComponent } from './usuario/usuario.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '', component: HomeComponent,
      },
      {
        path: 'compania', component: CompaniaComponent,
      },
      {
        path: 'proyecto/:id', component: ProyectoComponent,
      },
      {
        path: 'historia-usuario/:id', component: HistoriaUsuarioComponent,
      },
      {
        path: 'new-compania', component: NewCompaniaComponent,
      },
      {
        path: 'new-proyecto/:id', component: NewProyectoComponent,
      },
      {
        path: 'usuario', component: UsuarioComponent,
      },
    ] 
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
