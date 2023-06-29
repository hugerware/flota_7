import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionariosService } from '../services/funcionarios.service';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-newgrado',
  templateUrl: './newgrado.component.html',
  styleUrls: ['./newgrado.component.css']
})
export class NewgradoComponent implements OnInit{
  public grado: any={};   
  public token:any;
  formularioNew: FormGroup;
  
  

  constructor(private cdRef:ChangeDetectorRef,private creadorFormulario: FormBuilder,private _route:ActivatedRoute, private _serviceFuncionarios:FuncionariosService, private _auth:AuthService, private _router:Router){
    this.token=this._auth.getToken();
    this.formularioNew = this.creadorFormulario.group({      
      categoria_grado: [''],      
      estado_grado: [true],      
      nombre_grado:['',RxwebValidators.compose({
        validators:[
          RxwebValidators.required({conditionalExpression:'x => x.estado_grado === true' }),
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
    this._serviceFuncionarios.createGrado(this.formularioNew.value,this.token).toPromise()
    .then((response:any)=>{      
      this._router.navigate(['/admin/grados']);
      //this.formularioUpdate.reset({});
    })
    .catch((err:any) =>{     
      console.log(err);       
    });    
  }

}

