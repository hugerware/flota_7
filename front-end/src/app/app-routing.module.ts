import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { GuardService } from './services/guard.service';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { UpdatefuncionarioComponent } from './updatefuncionario/updatefuncionario.component';
import { NewfuncionarioComponent } from './newfuncionario/newfuncionario.component';
import { RolesComponent } from './roles/roles.component';
import { UpdaterolComponent } from './updaterol/updaterol.component';
import { NewrolComponent } from './newrol/newrol.component';
import { GradosComponent } from './grados/grados.component';
import { UpdategradoComponent } from './updategrado/updategrado.component';
import { NewgradoComponent } from './newgrado/newgrado.component';
import { DistritosComponent } from './distritos/distritos.component';
import { UpdatedistritoComponent } from './updatedistrito/updatedistrito.component';
import { CircuitosComponent } from './circuitos/circuitos.component';
import { UpdatecircuitoComponent } from './updatecircuito/updatecircuito.component';
import { SubcircuitosComponent } from './subcircuitos/subcircuitos.component';
import { UpdatesubcircuitoComponent } from './updatesubcircuito/updatesubcircuito.component';
import { TipovehiculosComponent } from './tipovehiculos/tipovehiculos.component';
import { UpdatetipovehiculoComponent } from './updatetipovehiculo/updatetipovehiculo.component';
import { NewtipovehiculoComponent } from './newtipovehiculo/newtipovehiculo.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { UpdatevehiculoComponent } from './updatevehiculo/updatevehiculo.component';
import { NewvehiculoComponent } from './newvehiculo/newvehiculo.component';

const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch:'full' }, 
  { path: 'login', component: LoginComponent},    
  { path: 'admin', component: AdminComponent, canActivate:[GuardService], 
      children:[
        { path: 'funcionarios', component: FuncionariosComponent },
        { path: 'updatefuncionario/:id_funcionario', component: UpdatefuncionarioComponent },
        { path: 'newfuncionario', component: NewfuncionarioComponent },
        { path: 'roles', component: RolesComponent },
        { path: 'updaterol/:id_rol', component: UpdaterolComponent },
        { path: 'newrol', component: NewrolComponent },
        { path: 'grados', component: GradosComponent },
        { path: 'updategrado/:id_grado', component: UpdategradoComponent },
        { path: 'newgrado', component: NewgradoComponent },
        { path: 'distritos', component: DistritosComponent },
        { path: 'updatedistrito/:id_distrito', component: UpdatedistritoComponent },
        { path: 'circuitos', component: CircuitosComponent },
        { path: 'updatecircuito/:id_circuito', component: UpdatecircuitoComponent },
        { path: 'subcircuitos', component: SubcircuitosComponent },
        { path: 'updatesubcircuito/:id_subcircuito', component: UpdatesubcircuitoComponent },
        { path: 'tipovehiculos', component: TipovehiculosComponent },
        { path: 'updatetipovehiculo/:id_tipovehiculo', component: UpdatetipovehiculoComponent },
        { path: 'newtipovehiculo', component: NewtipovehiculoComponent },
        { path: 'vehiculos', component: VehiculosComponent },
        { path: 'updatevehiculo/:id_vehiculo', component: UpdatevehiculoComponent },
        { path: 'newvehiculo', component: NewvehiculoComponent }
      ] 
  }    
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




