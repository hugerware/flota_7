import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { ChangeDetectorRef } from '@angular/core';
import { VehiculosService } from '../services/vehiculos.service';

@Component({
  selector: 'app-updatetipovehiculo',
  templateUrl: './updatetipovehiculo.component.html',
  styleUrls: ['./updatetipovehiculo.component.css']
})
export class UpdatetipovehiculoComponent implements OnInit{
  public tipovehiculo: any={};   
  public token:any;
  formularioUpdate: FormGroup;
  public alert:boolean=false;
  public error:boolean=false; 
  
  
  
  constructor(private cdRef:ChangeDetectorRef,private creadorFormulario: FormBuilder,private _route:ActivatedRoute, private _serviceTipovehiculos: VehiculosService, private _auth:AuthService, private _router:Router){
    this.token=this._auth.getToken();
    this.formularioUpdate = this.creadorFormulario.group({
      estado_tipovehiculo: [''],
      nombre_tipovehiculo: ['', RxwebValidators.required({conditionalExpression:'x => x.estado_tipovehiculo === true' })],
      descripcion_tipovehiculo: ['']      
    });    
  }

  ngAfterViewChecked(){
    this.cdRef.detectChanges();
  }
  



  ngOnInit(): void {
    this.getTipovehiculo();
   
    
    
  }
  getTipovehiculo(){
    this._route.params.forEach((params:Params)=>{
      this._serviceTipovehiculos.getTipovehiculoById(params['id_tipovehiculo'],this.token)
      .subscribe(data => {
        this.tipovehiculo = (data as any).tipovehiculo;        
        this.formularioUpdate.patchValue({
          estado_tipovehiculo: this.tipovehiculo.estado_tipovehiculo,
          nombre_tipovehiculo: this.tipovehiculo.nombre_tipovehiculo,
          descripcion_tipovehiculo: this.tipovehiculo.descripcion_tipovehiculo
        });       
      });      
    })
  }
  update(){
    //console.log(this.formularioUpdate.value);
    this._serviceTipovehiculos.updateTipovehiculo(this.tipovehiculo.id_tipovehiculo,this.formularioUpdate.value,this.token).toPromise()
    .then((response:any)=>{
      this._router.navigate(['/admin/updatetipovehiculo', this.tipovehiculo.id_tipovehiculo]);
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

