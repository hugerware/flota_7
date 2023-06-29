import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subject } from 'rxjs';
import { AsignacionesService } from '../services/asignaciones.service';


@Component({
  selector: 'app-distritos',
  templateUrl: './distritos.component.html',
  styleUrls: ['./distritos.component.css']
})
export class DistritosComponent implements OnInit {
  distritos: any;
  
  public error:boolean=false;
  public token:any;
  constructor(private _serviceAsignaciones:AsignacionesService, private _auth:AuthService){
    this.token=this._auth.getToken();
  }

  dtTrigger: Subject<any>= new Subject<any>();
  dtOptions: any = {};
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 7,
      processing: true,
      dom: 'Bfrtip',
        buttons: [
            'csv', 'excel', 'print'
        ]
    };
    this.getDistritos();
  }
  
  
 
  getDistritos(){
    this._serviceAsignaciones.getDistritos(this.token)
    .then(data => {
      this.distritos = (data as any).distrito;
      this.dtTrigger.next(null);
      //console.log(this.distritos);
      
    });
  }
}

