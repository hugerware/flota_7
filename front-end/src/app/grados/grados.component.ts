import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from '../services/funcionarios.service';
import { AuthService } from '../services/auth.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-grados',
  templateUrl: './grados.component.html',
  styleUrls: ['./grados.component.css']
})
export class GradosComponent implements OnInit{
  grados: any;
  public token:any;

  constructor(private _serviceFuncionarios:FuncionariosService, private _auth:AuthService){
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
    this.getGrados();

  }
  getGrados(){
    this._serviceFuncionarios.getGrados(this.token)
    .then(data => {
      this.grados = (data as any).grado;
      this.dtTrigger.next(null);
      
    });
  }
}

