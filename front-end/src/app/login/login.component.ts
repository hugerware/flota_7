import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public error:string='';
  
  formularioLogin: FormGroup;
  formularioPassword: FormGroup;

  constructor(private creadorFormulario: FormBuilder, private _serviceLogin:LoginService, private _router:Router) { 
    this.formularioLogin = this.creadorFormulario.group({
      login_usuario: ['', Validators.required],
      password_usuario: ['', Validators.required]
    });      
    this.formularioPassword = this.creadorFormulario.group({      
      email_usuario: ['', Validators.compose([
        Validators.required, Validators.email
      ])]
    });      
  }

  ngOnInit(): void {
     
  }
  
  login(){    
    this._serviceLogin.login(this.formularioLogin.value)
    .then((response:any) =>{     
      this._serviceLogin.login(this.formularioLogin.value,true)
      .then((responseToken:any) =>{
        localStorage.setItem('identity_user',JSON.stringify(response.usuario));      
        localStorage.setItem('token',responseToken.token);           
        this._router.navigate(['/admin'])
      })
      .catch((err:any) =>{
        this.formularioLogin.reset({});      
        this.error=err.error.message;      
      });
    })
    .catch((err:any) =>{
      this.formularioLogin.reset({});      
      this.error=err.error.message;      
    });
  }
  recuperar(){
    console.log(this.formularioPassword.value);
  }
  

}
