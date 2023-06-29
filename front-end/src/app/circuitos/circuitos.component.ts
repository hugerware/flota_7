import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subject } from 'rxjs';
import { AsignacionesService } from '../services/asignaciones.service';

@Component({
  selector: 'app-circuitos',
  templateUrl: './circuitos.component.html',
  styleUrls: ['./circuitos.component.css']
})
export class CircuitosComponent implements OnInit {
  circuitos: any;
  
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
    this.getCircuitos();
  }
  
   
  getCircuitos(){
    this._serviceAsignaciones.getCircuitos(this.token)
    .subscribe(data => {
      this.circuitos = (data as any).circuito;
      this.dtTrigger.next(null);
      console.log(this.circuitos);
      
    });
  }
}


