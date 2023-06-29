import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FuncionariosService } from '../services/funcionarios.service';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-newfuncionario',
  templateUrl: './newfuncionario.component.html',
  styleUrls: ['./newfuncionario.component.css']
})
export class NewfuncionarioComponent implements OnInit{
  public funcionario: any={}; 
  public grados:any=[];  
  public token:any;
  formularioNew: FormGroup;
  public alert:boolean=false;
  public error:boolean=false;
  

  constructor(private cdRef:ChangeDetectorRef,private creadorFormulario: FormBuilder,private _route:ActivatedRoute, private _serviceFuncionarios:FuncionariosService, private _auth:AuthService, private _router:Router){
    this.token=this._auth.getToken();
    this.formularioNew = this.creadorFormulario.group({
      nombres_funcionario: ['', RxwebValidators.required()],
      apellidos_funcionario: ['', RxwebValidators.required()],
      fnacimiento_funcionario: ['', RxwebValidators.required()],
      tsangre_funcionario: ['', RxwebValidators.required()],
      ciudad_funcionario: ['', RxwebValidators.required()],
      celular_funcionario: ['', RxwebValidators.required()],
      cedula_funcionario: ['', RxwebValidators.required()],
      estado_funcionario: [true],
      id_grado: [''],
      login_usuario:['',RxwebValidators.compose({
        validators:[
          RxwebValidators.required({conditionalExpression:'x => x.estado_usuario === true' }),
          RxwebValidators.minLength({value:5})
        ]
      })],      
      estado_usuario: [true],
      email_usuario:['',RxwebValidators.compose({
        validators:[
          RxwebValidators.required({conditionalExpression:'x => x.estado_usuario === true' }),
          RxwebValidators.email()
        ]
      })],
      password_usuario:['',RxwebValidators.compose({
        validators:[
          RxwebValidators.required({conditionalExpression:'x => x.estado_usuario === true' }),
          RxwebValidators.minLength({value:8})
        ]
      })],
      pass_usuario: ['', RxwebValidators.compare({fieldName:'password_usuario' })]
     
    });    
  }
  ngAfterViewChecked(){
    this.cdRef.detectChanges();
  }
  ngOnInit(): void {
    
    this.getGrados();
    
  }
  getGrados():any{
    this._serviceFuncionarios.getGrados(this.token)
    .then((response:any)=>{      
      this.grados=response.grado;      
    })
    .catch((error:any)=>{
      this.error=true; 
      alert(JSON.stringify(error));     
      console.log(JSON.stringify(error));      
    })
  }

  


  create(){
    //console.log(this.formularioNew.value);
    this._serviceFuncionarios.create(this.formularioNew.value,this.token).toPromise()
    .then((response:any)=>{
      this._router.navigate(['/admin/funcionarios']);     
      //this.formularioUpdate.reset({});
    })
    .catch((err:any) =>{      
      console.log(err);
    });    
  }

}
