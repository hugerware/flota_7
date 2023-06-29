import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FuncionariosService } from '../services/funcionarios.service';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-updategrado',
  templateUrl: './updategrado.component.html',
  styleUrls: ['./updategrado.component.css']
})
export class UpdategradoComponent implements OnInit{
  public grado: any={};   
  public token:any;
  formularioUpdate: FormGroup;
  public alert:boolean=false;
  public error:boolean=false; 
  
  
  
  constructor(private cdRef:ChangeDetectorRef,private creadorFormulario: FormBuilder,private _route:ActivatedRoute, private _serviceFuncionarios:FuncionariosService, private _auth:AuthService, private _router:Router){
    this.token=this._auth.getToken();
    this.formularioUpdate = this.creadorFormulario.group({
      estado_grado: [''],
      nombre_grado: ['', RxwebValidators.required({conditionalExpression:'x => x.estado_grado === true' })],
      categoria_grado: ['']      
    });    
  }

  ngAfterViewChecked(){
    this.cdRef.detectChanges();
  }
  



  ngOnInit(): void {
    this.getGrado();
   
    
    
  }
  getGrado(){
    this._route.params.forEach((params:Params)=>{
      this._serviceFuncionarios.getGradoById(params['id_grado'],this.token)
      .subscribe(data => {
        this.grado = (data as any).grado;        
        this.formularioUpdate.patchValue({
          estado_grado: this.grado.estado_grado,
          nombre_grado: this.grado.nombre_grado,
          categoria_grado: this.grado.categoria_grado
        });       
      });      
    })
  }
  update(){
    console.log(this.formularioUpdate.value);
    this._serviceFuncionarios.updateGrado(this.grado.id_grado,this.formularioUpdate.value,this.token).toPromise()
    .then((response:any)=>{
      this._router.navigate(['/admin/updategrado', this.grado.id_grado]);
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

