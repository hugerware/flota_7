import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  private url: string;
  constructor(private _http:HttpClient) { 
    this.url=GLOBAL.url;
  }
  getTipovehiculos(token:string){
    let headers=new HttpHeaders({
      'Authorization':token
    });
    let options={headers:headers}
    return this._http.get(this.url + 'tipovehiculos',options).toPromise()
    .then(response => response);    ;    
  }
  getTipovehiculoById(id_tipovehiculo:number,token:string){
    let headers=new HttpHeaders({
      'Authorization':token
    });
    let options={headers:headers}
    return this._http.get(this.url + 'tipovehiculo/' + id_tipovehiculo,options);    
  }

  updateTipovehiculo(id_tipovehiculo:number, tipovehiculo:any, token:string){
    let headers=new HttpHeaders({
      'Authorization':token
    });
    let options={headers:headers}
    return this._http.put(this.url + 'tipovehiculo/' + id_tipovehiculo,tipovehiculo, options); 
  }

  createTipovehiculo(tipovehiculo:any, token:string){
    let headers=new HttpHeaders({
      'Authorization':token
    });
    let options={headers:headers}
    return this._http.post(this.url + 'tipovehiculo',tipovehiculo, options); 
  }
  
  //vehiculos
  getVehiculos(token:string){
    let headers=new HttpHeaders({
      'Authorization':token
    });
    let options={headers:headers}
    return this._http.get(this.url + 'vehiculos',options);    
  }
  getVehiculoById(id_vehiculo:number,token:string){
    let headers=new HttpHeaders({
      'Authorization':token
    });
    let options={headers:headers}
    return this._http.get(this.url + 'vehiculo/' + id_vehiculo,options);    
  }

  updateVehiculo(id_vehiculo:number, vehiculo:any, token:string){
    let headers=new HttpHeaders({
      'Authorization':token
    });
    let options={headers:headers}
    return this._http.put(this.url + 'vehiculo/' + id_vehiculo,vehiculo, options); 
  }

  createVehiculo(vehiculo:any, token:string){
    let headers=new HttpHeaders({
      'Authorization':token
    });
    let options={headers:headers}
    return this._http.post(this.url + 'vehiculo',vehiculo, options); 
  }

}
