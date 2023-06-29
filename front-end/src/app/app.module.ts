import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { DataTablesModule } from 'angular-datatables';
import { UpdatefuncionarioComponent } from './updatefuncionario/updatefuncionario.component';
import { NewfuncionarioComponent } from './newfuncionario/newfuncionario.component'
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
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
import { NewvehiculoComponent } from './newvehiculo/newvehiculo.component';
import { UpdatevehiculoComponent } from './updatevehiculo/updatevehiculo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    FuncionariosComponent,
    UpdatefuncionarioComponent,
    NewfuncionarioComponent,
    RolesComponent,
    UpdaterolComponent,
    NewrolComponent,
    GradosComponent,
    UpdategradoComponent,
    NewgradoComponent,
    DistritosComponent,
    UpdatedistritoComponent,
    CircuitosComponent,
    UpdatecircuitoComponent,
    SubcircuitosComponent,
    UpdatesubcircuitoComponent,
    TipovehiculosComponent,
    UpdatetipovehiculoComponent,
    NewtipovehiculoComponent,
    VehiculosComponent,
    NewvehiculoComponent,
    UpdatevehiculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
