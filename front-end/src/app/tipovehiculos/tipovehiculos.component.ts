import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subject } from 'rxjs';
import { VehiculosService } from '../services/vehiculos.service';


@Component({
  selector: 'app-tipovehiculos',
  templateUrl: './tipovehiculos.component.html',
  styleUrls: ['./tipovehiculos.component.css']
})
export class TipovehiculosComponent implements OnInit{
  tipovehiculos: any;
  public token:any;

  constructor(private _serviceVehiculos:VehiculosService, private _auth:AuthService){
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
    this.getTipovehiculos();

  }
  getTipovehiculos(){
    this._serviceVehiculos.getTipovehiculos(this.token)
    .then(data => {
      this.tipovehiculos = (data as any).tipovehiculo;
      this.dtTrigger.next(null);
      
    });
  }
}

