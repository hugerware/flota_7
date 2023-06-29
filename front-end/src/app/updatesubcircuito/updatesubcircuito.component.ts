import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { ChangeDetectorRef } from '@angular/core';
import { AsignacionesService } from '../services/asignaciones.service';

@Component({
  selector: 'app-updatesubcircuito',
  templateUrl: './updatesubcircuito.component.html',
  styleUrls: ['./updatesubcircuito.component.css']
})
export class UpdatesubcircuitoComponent implements OnInit {
  public subcircuito: any={};  
  public circuitos:any=[];  
  public token:any;
  formularioUpdate: FormGroup;
  public alert:boolean=false;
  public error:boolean=false;
  public nombre_circuito_df:any;
  public id_circuito_df:any;
  
  constructor(private cdRef:ChangeDetectorRef,private creadorFormulario: FormBuilder,private _route:ActivatedRoute, private _serviceDistritos:AsignacionesService, private _auth:AuthService, private _router:Router){
    this.token=this._auth.getToken();
    this.formularioUpdate = this.creadorFormulario.group({      
      id_circuito: [''],
      estado_subcircuito: [''],
      numero_subcircuito: ['', RxwebValidators.required({conditionalExpression:'x => x.estado_subcircuito === true' })],
      codigo_subcircuito: ['', RxwebValidators.required({conditionalExpression:'x => x.estado_subcircuito === true' })],
      nombre_subcircuito: ['', RxwebValidators.required({conditionalExpression:'x => x.estado_subcircuito === true' })],      
    });    
  }

  ngAfterViewChecked(){
    this.cdRef.detectChanges();
  }
  
  ngOnInit(): void {
    this.getSubcircuito();
    this.getCircuitos();
  }


  getSubcircuito(){
    this._route.params.forEach((params:Params)=>{
      this._serviceDistritos.getSubcircuitoById(params['id_subcircuito'],this.token)
      .subscribe(data => {
        this.subcircuito = (data as any).subcircuito;           
        this.nombre_circuito_df = this.subcircuito.circuito.nombre_circuito;
        this.id_circuito_df= this.subcircuito.circuito.id_circuito;             
        this.formularioUpdate.patchValue({
          numero_subcircuito: this.subcircuito.numero_subcircuito,
          codigo_subcircuito: this.subcircuito.codigo_subcircuito,
          nombre_subcircuito: this.subcircuito.nombre_subcircuito,
          estado_subcircuito: this.subcircuito.estado_subcircuito,
          id_circuito: this.subcircuito.circuito.id_circuito          
        });       
      });      
    })
  }
  

  getCircuitos():any{
    this._serviceDistritos.getCircuitos(this.token)    
    .subscribe((response:any)=>{      
      this.circuitos=response.distrito;            
    })    
  } 

  update(){    
    
    this._serviceDistritos.updateSubcircuito(this.subcircuito.id_subcircuito,this.formularioUpdate.value,this.token).toPromise()
    .then((response:any)=>{
      this._router.navigate(['/admin/updatesubcircuito', this.subcircuito.id_subcircuito]);
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

