import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subject } from 'rxjs';
import { VehiculosService } from '../services/vehiculos.service';


@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {
  vehiculos: any;
  
  public error:boolean=false;
  public token:any;
  constructor(private _serviceVehiculos: VehiculosService, private _auth:AuthService){
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
    this.getVehiculos();
  }
  
  
  getVehiculos(){
    this._serviceVehiculos.getVehiculos(this.token)
    .subscribe(data => {
      this.vehiculos = (data as any).vehiculo;
      this.dtTrigger.next(null);
      //console.log(this.vehiculos);
      
    });
  }
}

