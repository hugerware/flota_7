import { Injectable } from '@angular/core';
import { GLOBAL } from './global';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _url:string;
  constructor(private _http:HttpClient) { 
    this._url=GLOBAL.url;
  }
  login(usuario:any,getToken?:boolean){
    if(getToken){
      usuario.token=getToken
    }
    let headers=new HttpHeaders({
      'Content-type':'Application/json'
    });
    let options={headers:headers}
    return this._http.post(this._url + 'login',usuario,options).toPromise()
  }
}
