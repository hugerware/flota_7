import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { ChangeDetectorRef } from '@angular/core';
import { AsignacionesService } from '../services/asignaciones.service';


@Component({
  selector: 'app-updatedistrito',
  templateUrl: './updatedistrito.component.html',
  styleUrls: ['./updatedistrito.component.css']
})
export class UpdatedistritoComponent implements OnInit {
  public distrito: any={};  
  public provincias:any=[];  
  public token:any;
  formularioUpdate: FormGroup;
  public alert:boolean=false;
  public error:boolean=false;
  public nombre_provincia_df:any;
  public id_provincia_df:any;
  
  
  


  constructor(private cdRef:ChangeDetectorRef,private creadorFormulario: FormBuilder,private _route:ActivatedRoute, private _serviceDistritos:AsignacionesService, private _auth:AuthService, private _router:Router){
    this.token=this._auth.getToken();
    this.formularioUpdate = this.creadorFormulario.group({      
      id_provincia: [''],
      estado_distrito: [''],
      numero_distrito: ['', RxwebValidators.required({conditionalExpression:'x => x.estado_distrito === true' })],
      codigo_distrito: ['', RxwebValidators.required({conditionalExpression:'x => x.estado_distrito === true' })],
      nombre_distrito: ['', RxwebValidators.required({conditionalExpression:'x => x.estado_distrito === true' })],
      
    });    
  }

  ngAfterViewChecked(){
    this.cdRef.detectChanges();
  }
  



  ngOnInit(): void {
    this.getDistrito();
    this.getProvincias();
    
    
  }
 


  

  getDistrito(){
    this._route.params.forEach((params:Params)=>{
      this._serviceDistritos.getDistritoById(params['id_distrito'],this.token)
      .subscribe(data => {
        this.distrito = (data as any).distrito;           
        this.nombre_provincia_df = this.distrito.provincia.nombre_provincia;
        this.id_provincia_df= this.distrito.provincia.id_provincia;             
        this.formularioUpdate.patchValue({
          numero_distrito: this.distrito.numero_distrito,
          codigo_distrito: this.distrito.codigo_distrito,
          nombre_distrito: this.distrito.nombre_distrito,
          estado_distrito: this.distrito.estado_distrito,
          id_provincia: this.distrito.provincia.id_provincia          
        });       
      });      
    })
  }
  

  getProvincias():any{
    this._serviceDistritos.getProvincias(this.token)    
    .then((response:any)=>{      
      this.provincias=response.provincia;            
    })
    .catch((error:any)=>{
      this.error=true; 
      alert(JSON.stringify(error));     
      console.log(JSON.stringify(error));      
    })   
  } 

  update(){    
    this._serviceDistritos.update(this.distrito.id_distrito,this.formularioUpdate.value,this.token).toPromise()
    .then((response:any)=>{
      this._router.navigate(['/admin/updatedistrito', this.distrito.id_distrito]);
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
