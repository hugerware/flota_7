import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FuncionariosService } from '../services/funcionarios.service';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-updaterol',
  templateUrl: './updaterol.component.html',
  styleUrls: ['./updaterol.component.css']
})
export class UpdaterolComponent implements OnInit{
  public rol: any={};   
  public token:any;
  formularioUpdate: FormGroup;
  public alert:boolean=false;
  public error:boolean=false; 
  
  
  
  constructor(private cdRef:ChangeDetectorRef,private creadorFormulario: FormBuilder,private _route:ActivatedRoute, private _serviceFuncionarios:FuncionariosService, private _auth:AuthService, private _router:Router){
    this.token=this._auth.getToken();
    this.formularioUpdate = this.creadorFormulario.group({
      estado_rol: [''],
      nombre_rol: ['', RxwebValidators.required({conditionalExpression:'x => x.estado_rol === true' })],
      descripcion_rol: ['']      
    });    
  }

  ngAfterViewChecked(){
    this.cdRef.detectChanges();
  }
  



  ngOnInit(): void {
    this.getRol();
   
    
    
  }
  getRol(){
    this._route.params.forEach((params:Params)=>{
      this._serviceFuncionarios.getRolById(params['id_rol'],this.token)
      .subscribe(data => {
        this.rol = (data as any).rol;        
        this.formularioUpdate.patchValue({
          estado_rol: this.rol.estado_rol,
          nombre_rol: this.rol.nombre_rol,
          descripcion_rol: this.rol.descripcion_rol
        });       
      });      
    })
  }
  update(){
    console.log(this.formularioUpdate.value);
    this._serviceFuncionarios.updateRol(this.rol.id_rol,this.formularioUpdate.value,this.token).toPromise()
    .then((response:any)=>{
      this._router.navigate(['/admin/updaterol', this.rol.id_rol]);
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
