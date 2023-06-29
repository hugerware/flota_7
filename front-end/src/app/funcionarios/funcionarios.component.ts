import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from '../services/funcionarios.service';
import { AuthService } from '../services/auth.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {
  funcionarios: any;
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
    this.getFuncionarios();
  }
  getFuncionarios(){
    this._serviceFuncionarios.getFuncionarios(this.token)
    .subscribe(data => {
      this.funcionarios = (data as any).funcionario;
      this.dtTrigger.next(null);
      
    });
  }
}
