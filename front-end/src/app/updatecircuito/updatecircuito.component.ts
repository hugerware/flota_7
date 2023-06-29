import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { ChangeDetectorRef } from '@angular/core';
import { AsignacionesService } from '../services/asignaciones.service';


@Component({
  selector: 'app-updatecircuito',
  templateUrl: './updatecircuito.component.html',
  styleUrls: ['./updatecircuito.component.css']
})
export class UpdatecircuitoComponent implements OnInit {
  public circuito: any={};  
  public distritos:any=[];  
  public token:any;
  formularioUpdate: FormGroup;
  public alert:boolean=false;
  public error:boolean=false;
  public nombre_distrito_df:any;
  public id_distrito_df:any;
  
  constructor(private cdRef:ChangeDetectorRef,private creadorFormulario: FormBuilder,private _route:ActivatedRoute, private _serviceDistritos:AsignacionesService, private _auth:AuthService, private _router:Router){
    this.token=this._auth.getToken();
    this.formularioUpdate = this.creadorFormulario.group({      
      id_distrito: [''],
      estado_circuito: [''],
      numero_circuito: ['', RxwebValidators.required({conditionalExpression:'x => x.estado_circuito === true' })],
      codigo_circuito: ['', RxwebValidators.required({conditionalExpression:'x => x.estado_circuito === true' })],
      nombre_circuito: ['', RxwebValidators.required({conditionalExpression:'x => x.estado_circuito === true' })],      
    });    
  }

  ngAfterViewChecked(){
    this.cdRef.detectChanges();
  }
  
  ngOnInit(): void {
    this.getCircuito();
    this.getDistritos();
  }


  getCircuito(){
    this._route.params.forEach((params:Params)=>{
      this._serviceDistritos.getCircuitoById(params['id_circuito'],this.token)
      .subscribe(data => {
        this.circuito = (data as any).circuito;           
        this.nombre_distrito_df = this.circuito.distrito.nombre_distrito;
        this.id_distrito_df= this.circuito.distrito.id_distrito;             
        this.formularioUpdate.patchValue({
          numero_circuito: this.circuito.numero_circuito,
          codigo_circuito: this.circuito.codigo_circuito,
          nombre_circuito: this.circuito.nombre_circuito,
          estado_circuito: this.circuito.estado_circuito,
          id_distrito: this.circuito.distrito.id_distrito          
        });       
      });      
    })
  }
  

  getDistritos():any{
    this._serviceDistritos.getDistritos(this.token)    
    .then((response:any)=>{      
      this.distritos=response.distrito;            
    })
    .catch((error:any)=>{
      this.error=true; 
      alert(JSON.stringify(error));     
      console.log(JSON.stringify(error));      
    })   
  } 

  update(){    
    //console.log(this.formularioUpdate.value);
    this._serviceDistritos.updateCircuito(this.circuito.id_circuito,this.formularioUpdate.value,this.token).toPromise()
    .then((response:any)=>{
      this._router.navigate(['/admin/updatecircuito', this.circuito.id_circuito]);
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

