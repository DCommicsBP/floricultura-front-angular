import { Component, OnInit } from '@angular/core';
import { ClientesService } from './clientes.service';
import { Cliente } from './cliente.class';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{

  clientes: Cliente[]; 
  constructor(private cli:ClientesService) {
    

   }
  ngOnInit(){
    this.cli.getClientes().subscribe(dados=> this.clientes = dados)
  }
}
