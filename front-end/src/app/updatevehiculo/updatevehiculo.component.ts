import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { ChangeDetectorRef } from '@angular/core';
import { VehiculosService } from '../services/vehiculos.service';

@Component({
  selector: 'app-updatevehiculo',
  templateUrl: './updatevehiculo.component.html',
  styleUrls: ['./updatevehiculo.component.css']
})
export class UpdatevehiculoComponent implements OnInit {
  public vehiculo: any={};  
  public tipovehiculos:any=[];  
  public token:any;
  formularioUpdate: FormGroup;
  public alert:boolean=false;
  public error:boolean=false;
  public nombre_tipovehiculo_df:any;
  public id_tipovehiculo_df:any;
  
  
  constructor(private cdRef:ChangeDetectorRef,private creadorFormulario: FormBuilder,private _route:ActivatedRoute, private _serviceUpdatevehiculo: VehiculosService, private _auth:AuthService, private _router:Router){
    this.token=this._auth.getToken();
    this.formularioUpdate = this.creadorFormulario.group({      
      id_tipovehiculo: [''],
      estado_vehiculo: [''],
      placa_vehiculo: ['', RxwebValidators.required({conditionalExpression:'x => x.estado_vehiculo === true' })],
      chasis_vehiculo: ['', RxwebValidators.required({conditionalExpression:'x => x.estado_vehiculo === true' })],
      marca_vehiculo: ['', RxwebValidators.required({conditionalExpression:'x => x.estado_vehiculo === true' })],
      modelo_vehiculo: ['', RxwebValidators.required({conditionalExpression:'x => x.estado_vehiculo === true' })],
      motor_vehiculo: ['', RxwebValidators.required({conditionalExpression:'x => x.estado_vehiculo === true' })],
      cilindraje_vehiculo: ['', RxwebValidators.required({conditionalExpression:'x => x.estado_vehiculo === true' })],
      capacidadcarga_vehiculo: ['', RxwebValidators.required({conditionalExpression:'x => x.estado_vehiculo === true' })],
      numeropasajeros_vehiculo: ['', RxwebValidators.required({conditionalExpression:'x => x.estado_vehiculo === true' })]
      
    });    
  }

  ngAfterViewChecked(){
    this.cdRef.detectChanges();
  }
  
  ngOnInit(): void {
    this.getVehiculo();
    this.getTipovehiculos();
    
    
  }
 

 

  getVehiculo(){
    this._route.params.forEach((params:Params)=>{
      this._serviceUpdatevehiculo.getVehiculoById(params['id_vehiculo'],this.token)
      .subscribe(data => {
        this.vehiculo = (data as any).vehiculo;             
        this.nombre_tipovehiculo_df = this.vehiculo.tipovehiculo.nombre_tipovehiculo;
        this.id_tipovehiculo_df= this.vehiculo.tipovehiculo.id_tipovehiculo;             
        this.formularioUpdate.patchValue({
          numero_vehiculo: this.vehiculo.numero_vehiculo,
          placa_vehiculo: this.vehiculo.placa_vehiculo,
          chasis_vehiculo: this.vehiculo.chasis_vehiculo,
          marca_vehiculo: this.vehiculo.marca_vehiculo,
          modelo_vehiculo: this.vehiculo.modelo_vehiculo,
          motor_vehiculo: this.vehiculo.motor_vehiculo,
          cilindraje_vehiculo: this.vehiculo.cilindraje_vehiculo,
          capacidadcarga_vehiculo: this.vehiculo.capacidadcarga_vehiculo,
          numeropasajeros_vehiculo: this.vehiculo.numeropasajeros_vehiculo,
          estado_vehiculo: this.vehiculo.estado_vehiculo,
          id_tipovehiculo: this.vehiculo.tipovehiculo.id_tipovehiculo          
        });       
      });      
    })
  }
  

  getTipovehiculos():any{
    this._serviceUpdatevehiculo.getTipovehiculos(this.token)    
    .then((response:any)=>{      
      this.tipovehiculos=response.tipovehiculo;            
    })
    .catch((error:any)=>{
      this.error=true; 
      alert(JSON.stringify(error));     
      console.log(JSON.stringify(error));      
    })   
  } 

  update(){    
    this._serviceUpdatevehiculo.updateVehiculo(this.vehiculo.id_vehiculo,this.formularioUpdate.value,this.token).toPromise()
    .then((response:any)=>{
      this._router.navigate(['/admin/updatevehiculo', this.vehiculo.id_vehiculo]);
      this.alert=true;
      this.error=false;
      //this.formularioUpdate.reset({});
    })
    .catch((err:any) =>{      
      this.error=true;
      this.alert=false;
    });        
  }
}

