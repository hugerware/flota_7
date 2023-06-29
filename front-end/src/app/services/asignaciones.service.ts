import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AsignacionesService {

  private url: string;
  constructor(private _http:HttpClient) { 
    this.url=GLOBAL.url;
  }
  
  getProvincias(token:string){
    let headers=new HttpHeaders({
      'Authorization':token
    });
    let options={headers:headers}
    return this._http.get(this.url + 'provincias',options).toPromise()
    .then(response => response);    
  }

  getDistritos(token:string){
    let headers=new HttpHeaders({
      'Authorization':token
    });
    let options={headers:headers}
    return this._http.get(this.url + 'distritos',options).toPromise()
    .then(response => response);        
  }
  getDistritoById(id_distrito:number,token:string){
    let headers=new HttpHeaders({
      'Authorization':token
    });
    let options={headers:headers}
    return this._http.get(this.url + 'distrito/' + id_distrito,options);    
  }
  
  update(id_distrito:number, distrito:any, token:string){
    let headers=new HttpHeaders({
      'Authorization':token
    });
    let options={headers:headers}
    return this._http.put(this.url + 'distrito/' + id_distrito,distrito, options); 
  }

  getCircuitos(token:string){
    let headers=new HttpHeaders({
      'Authorization':token
    });
    let options={headers:headers}
    return this._http.get(this.url + 'circuitos',options);    
  }
  getCircuitoById(id_circuito:number,token:string){
    let headers=new HttpHeaders({
      'Authorization':token
    });
    let options={headers:headers}
    return this._http.get(this.url + 'circuito/' + id_circuito,options);    
  }
  
  updateCircuito(id_circuito:number, circuito:any, token:string){
    let headers=new HttpHeaders({
      'Authorization':token
    });
    let options={headers:headers}
    return this._http.put(this.url + 'circuito/' + id_circuito,circuito, options); 
  }

  getSubcircuitos(token:string){
    let headers=new HttpHeaders({
      'Authorization':token
    });
    let options={headers:headers}
    return this._http.get(this.url + 'subcircuitos',options);    
  }
  getSubcircuitoById(id_subcircuito:number,token:string){
    let headers=new HttpHeaders({
      'Authorization':token
    });
    let options={headers:headers}
    return this._http.get(this.url + 'subcircuito/' + id_subcircuito,options);    
  }
  
  updateSubcircuito(id_subcircuito:number, ubcircuito:any, token:string){
    let headers=new HttpHeaders({
      'Authorization':token
    });
    let options={headers:headers}
    return this._http.put(this.url + 'subcircuito/' + id_subcircuito,ubcircuito, options); 
  }

}
