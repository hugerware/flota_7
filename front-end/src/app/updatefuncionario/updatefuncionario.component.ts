import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FuncionariosService } from '../services/funcionarios.service';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-updatefuncionario',
  templateUrl: './updatefuncionario.component.html',
  styleUrls: ['./updatefuncionario.component.css']
})
export class UpdatefuncionarioComponent implements OnInit {
  public funcionario: any={}; 
  public grados:any=[];  
  public token:any;
  formularioUpdate: FormGroup;
  public alert:boolean=false;
  public error:boolean=false;
  public estadoFuncionario:boolean=false;
  public estadoLogin:boolean=false;
  public nombre_grado_df:any;
  public id_grado_df:any;
  public estado_funcionario_df:any;
  public estadoLogin_df:any;
  


  constructor(private cdRef:ChangeDetectorRef,private creadorFormulario: FormBuilder,private _route:ActivatedRoute, private _serviceFuncionarios:FuncionariosService, private _auth:AuthService, private _router:Router){
    this.token=this._auth.getToken();
    this.formularioUpdate = this.creadorFormulario.group({
      nombres_funcionario: ['', RxwebValidators.required()],
      apellidos_funcionario: ['', RxwebValidators.required()],
      fnacimiento_funcionario: ['', RxwebValidators.required()],
      tsangre_funcionario: ['', RxwebValidators.required()],
      ciudad_funcionario: ['', RxwebValidators.required()],
      celular_funcionario: ['', RxwebValidators.required()],
      cedula_funcionario: ['', RxwebValidators.required()],
      estado_funcionario: ['', RxwebValidators.required()],
      id_grado: [''],
      login_usuario: ['', RxwebValidators.required({conditionalExpression:'x => x.estado_usuario === true' })],
      email_usuario:['',RxwebValidators.compose({
        validators:[
          RxwebValidators.required({conditionalExpression:'x => x.estado_usuario === true' }),
          RxwebValidators.email()
        ]
      })],
      estado_usuario: ['', RxwebValidators.required()]
    });    
  }

  ngAfterViewChecked(){
    this.cdRef.detectChanges();
  }
  



  ngOnInit(): void {
    this.getFuncionario();
    this.getGrados();
    
    
  }
 


  checkCheckBoxestado(event:any){
    this.estado_funcionario_df=false;
    if(event.checked){
      this.estadoFuncionario=true;
    }else{
      this.estadoFuncionario=false;
      this.estadoLogin=false;
    }    
  }
  checkCheckBoxlogin(event:any){
    this.estadoLogin_df=false;
    if(event.checked){
      this.estadoLogin=true;
    }else{
      this.estadoLogin=false;
      
    }    
  }
  

  getFuncionario(){
    this._route.params.forEach((params:Params)=>{
      this._serviceFuncionarios.getFuncionarioById(params['id_funcionario'],this.token)
      .subscribe(data => {
        this.funcionario = (data as any).funcionario;   
           
        this.nombre_grado_df = this.funcionario.grado.nombre_grado;
        this.id_grado_df= this.funcionario.grado.id_grado;  
        this.estado_funcionario_df= this.funcionario.estado_funcionario;             
        this.estadoLogin_df=this.funcionario.usuario.estado_usuario;
        
        this.formularioUpdate.patchValue({
          nombres_funcionario: this.funcionario.nombres_funcionario,
          apellidos_funcionario: this.funcionario.apellidos_funcionario,
          fnacimiento_funcionario: this.funcionario.fnacimiento_funcionario,
          tsangre_funcionario: this.funcionario.tsangre_funcionario,
          ciudad_funcionario: this.funcionario.ciudad_funcionario,
          celular_funcionario: this.funcionario.celular_funcionario,
          cedula_funcionario: this.funcionario.cedula_funcionario,
          estado_funcionario: this.funcionario.estado_funcionario,
          id_grado: this.funcionario.grado.id_grado,
          login_usuario: this.funcionario.usuario.login_usuario,
          email_usuario: this.funcionario.usuario.email_usuario,
          estado_usuario: this.funcionario.usuario.estado_usuario                                        
        });       
      });      
    })
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
 

  





  update(){
    //console.log(this.formularioUpdate.value);
    this._serviceFuncionarios.update(this.funcionario.id_funcionario,this.formularioUpdate.value,this.token).toPromise()
    .then((response:any)=>{
      this._router.navigate(['/admin/updatefuncionario', this.funcionario.id_funcionario]);
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
