import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FuncionariosService } from '../services/funcionarios.service';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-newrol',
  templateUrl: './newrol.component.html',
  styleUrls: ['./newrol.component.css']
})
export class NewrolComponent implements OnInit{
  public rol: any={};   
  public token:any;
  formularioNew: FormGroup;
  
  

  constructor(private cdRef:ChangeDetectorRef,private creadorFormulario: FormBuilder,private _route:ActivatedRoute, private _serviceFuncionarios:FuncionariosService, private _auth:AuthService, private _router:Router){
    this.token=this._auth.getToken();
    this.formularioNew = this.creadorFormulario.group({      
      descripcion_rol: [''],      
      estado_rol: [true],      
      nombre_rol:['',RxwebValidators.compose({
        validators:[
          RxwebValidators.required({conditionalExpression:'x => x.estado_rol === true' }),
          RxwebValidators.minLength({value:5})
        ]
      })]     
    });    
  }
  ngAfterViewChecked(){
    this.cdRef.detectChanges();
  }
  ngOnInit(): void {  
    
    
  }

  create(){    
    this._serviceFuncionarios.createRol(this.formularioNew.value,this.token).toPromise()
    .then((response:any)=>{      
      this._router.navigate(['/admin/roles']);
      //this.formularioUpdate.reset({});
    })
    .catch((err:any) =>{     
      console.log(err);       
    });    
  }

}
