import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subject } from 'rxjs';
import { AsignacionesService } from '../services/asignaciones.service';

@Component({
  selector: 'app-subcircuitos',
  templateUrl: './subcircuitos.component.html',
  styleUrls: ['./subcircuitos.component.css']
})
export class SubcircuitosComponent implements OnInit {
  subcircuitos: any;
  
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
    this.getSubcircuitos();
  }
  
   
  getSubcircuitos(){
    this._serviceAsignaciones.getSubcircuitos(this.token)
    .subscribe(data => {
      this.subcircuitos = (data as any).subcircuito;
      this.dtTrigger.next(null);
      //console.log(this.subcircuitos);
      
    });
  }
}


