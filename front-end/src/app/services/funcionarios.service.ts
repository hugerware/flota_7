import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {
  private url: string;
  constructor(private _http:HttpClient) { 
    this.url=GLOBAL.url;
  }
  getFuncionarios(token:string){
    let headers=new HttpHeaders({
      'Authorization':token
    });
    let options={headers:headers}
    return this._http.get(this.url + 'funcionarios',options);    
  }
  getFuncionarioById(id_funcionario:number,token:string){
    let headers=new HttpHeaders({
      'Authorization':token
    });
    let options={headers:headers}
    return this._http.get(this.url + 'funcionario/' + id_funcionario,options);    
  }

  update(id_funcionario:number, funcionario:any, token:string){
    let headers=new HttpHeaders({
      'Authorization':token
    });
    let options={headers:headers}
    return this._http.put(this.url + 'funcionario/' + id_funcionario,funcionario, options); 
  }

  create(funcionario:any, token:string){
    let headers=new HttpHeaders({
      'Authorization':token
    });
    let options={headers:headers}
    return this._http.post(this.url + 'funcionario',funcionario, options); 
  }
  
  
  //ROLES
  getRoles(token:string){
    let headers=new HttpHeaders({
      'Authorization':token
    });
    let options={headers:headers}
    return this._http.get(this.url + 'roles',options);    
  }
  getRolById(id_rol:number,token:string){
    let headers=new HttpHeaders({
      'Authorization':token
    });
    let options={headers:headers}
    return this._http.get(this.url + 'rol/' + id_rol,options);    
  }
  updateRol(id_rol:number, rol:any, token:string){
    let headers=new HttpHeaders({
      'Authorization':token
    });
    let options={headers:headers}
    return this._http.put(this.url + 'rol/' + id_rol,rol, options); 
  }
  createRol(rol:any, token:string){
    let headers=new HttpHeaders({
      'Authorization':token
    });
    let options={headers:headers}
    return this._http.post(this.url + 'rol',rol, options); 
  }

  //GRADOS
  getGrados(token:string){
    let headers=new HttpHeaders({
      'Authorization':token
    });
    let options={headers:headers}
    return this._http.get(this.url + 'grados',options).toPromise()
    .then(response => response);    
  }
  getGradoById(id_grado:number,token:string){
    let headers=new HttpHeaders({
      'Authorization':token
    });
    let options={headers:headers}
    return this._http.get(this.url + 'grado/' + id_grado,options);    
  }
  updateGrado(id_grado:number, grado:any, token:string){
    let headers=new HttpHeaders({
      'Authorization':token
    });
    let options={headers:headers}
    return this._http.put(this.url + 'grado/' + id_grado,grado, options); 
  }
  createGrado(grado:any, token:string){
    let headers=new HttpHeaders({
      'Authorization':token
    });
    let options={headers:headers}
    return this._http.post(this.url + 'grado',grado, options); 
  }

}
