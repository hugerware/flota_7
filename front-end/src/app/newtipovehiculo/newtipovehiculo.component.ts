import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { ChangeDetectorRef } from '@angular/core';
import { VehiculosService } from '../services/vehiculos.service';

@Component({
  selector: 'app-newtipovehiculo',
  templateUrl: './newtipovehiculo.component.html',
  styleUrls: ['./newtipovehiculo.component.css']
})
export class NewtipovehiculoComponent implements OnInit{
  public tipovehiculo: any={};   
  public token:any;
  formularioNew: FormGroup;
  
  

  constructor(private cdRef:ChangeDetectorRef,private creadorFormulario: FormBuilder,private _route:ActivatedRoute, private _serviceTipovehiculos:VehiculosService, private _auth:AuthService, private _router:Router){
    this.token=this._auth.getToken();
    this.formularioNew = this.creadorFormulario.group({      
      descripcion_tipovehiculo: [''],      
      estado_tipovehiculo: [true],      
      nombre_tipovehiculo:['',RxwebValidators.compose({
        validators:[
          RxwebValidators.required({conditionalExpression:'x => x.estado_tipovehiculo === true' }),
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
    this._serviceTipovehiculos.createTipovehiculo(this.formularioNew.value,this.token).toPromise()
    .then((response:any)=>{      
      this._router.navigate(['/admin/tipovehiculos']);
      //this.formularioUpdate.reset({});
    })
    .catch((err:any) =>{     
      console.log(err);       
    });    
  }

}

