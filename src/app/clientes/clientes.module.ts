import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';
import { ClientesService } from './clientes.service';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';

@NgModule({
  imports: [
    CommonModule

  ],
  declarations: [ClienteDetalheComponent], 
  providers:[ClientesService]
})
export class ClientesModule { }
