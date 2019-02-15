import { Component, OnInit, Input, Output } from '@angular/core';
import { Cliente } from '../cliente.class';
import { Observable } from 'rxjs/Observable';
import { ClientesService } from '../clientes.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-cliente-detalhe',
  templateUrl: './cliente-detalhe.component.html',
  styleUrls: ['./cliente-detalhe.component.css']
})

export class ClienteDetalheComponent implements OnInit {
  id: number;

  cliente: Cliente = new Cliente(); 
  constructor(private clienteService:ClientesService) { }

  ngOnInit() {
    this.id = parseInt(document.URL.split('/')[document.URL.split('/').length-1]); 
    this.clienteService.getCliente(this.id).subscribe(dado => this.cliente= dado);
  }

  
  onRegisterSubmit(form){

  }

  
}
