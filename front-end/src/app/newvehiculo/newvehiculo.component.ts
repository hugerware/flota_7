import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { ChangeDetectorRef } from '@angular/core';
import { VehiculosService } from '../services/vehiculos.service';

@Component({
  selector: 'app-newvehiculo',
  templateUrl: './newvehiculo.component.html',
  styleUrls: ['./newvehiculo.component.css']
})
export class NewvehiculoComponent implements OnInit{  
  public tipovehiculos:any=[];  
  public token:any;
  formularioNew: FormGroup;
  public alert:boolean=false;
  public error:boolean=false;
  

  constructor(private cdRef:ChangeDetectorRef,private creadorFormulario: FormBuilder,private _route:ActivatedRoute, private _serviceVehiculos:VehiculosService, private _auth:AuthService, private _router:Router){
    this.token=this._auth.getToken();
    this.formularioNew = this.creadorFormulario.group({
      placa_vehiculo: ['', RxwebValidators.required()],
      chasis_vehiculo: ['', RxwebValidators.required()],
      marca_vehiculo: ['', RxwebValidators.required()],
      modelo_vehiculo: ['', RxwebValidators.required()],
      motor_vehiculo: ['', RxwebValidators.required()],
      cilindraje_vehiculo: ['', RxwebValidators.required()],
      capacidadcarga_vehiculo: ['', RxwebValidators.required()],
      numeropasajeros_vehiculo: ['', RxwebValidators.required()],
      id_tipovehiculo: ['', RxwebValidators.required()],
     
    });    
  }
  ngAfterViewChecked(){
    this.cdRef.detectChanges();
  }
  ngOnInit(): void {
    
    this.getTipovehiculos();
    
  }
  getTipovehiculos():any{
    this._serviceVehiculos.getTipovehiculos(this.token)
    .then((response:any)=>{      
      this.tipovehiculos=response.tipovehiculo;       
    })
    .catch((error:any)=>{
      this.error=true; 
      alert(JSON.stringify(error));     
      console.log(JSON.stringify(error));      
    })
    
  }

  


  create(){
    //console.log(this.formularioNew.value);
    this._serviceVehiculos.createVehiculo(this.formularioNew.value,this.token).toPromise()
    .then((response:any)=>{
      this._router.navigate(['/admin/vehiculos']);     
      //this.formularioUpdate.reset({});
    })
    .catch((err:any) =>{      
      console.log(err);
    });    
  }

}

