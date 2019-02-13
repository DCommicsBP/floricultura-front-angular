import {NgModule, Injectable} from '@angular/core'
import { Cliente } from './cliente.class';

@Injectable()
export class ClientesService{
    constructor(){
        this.clientes = this.getClientes()
    }

    clientes: Array<Cliente> = []; 

    
// https://www.typescriptlang.org/docs/handbook/basic-types.html
    getClientes(){
        fetch(
            'http://localhost:3000/cliente',
            {   method: 'GET',
                mode: 'cors',
        
            }).then((response)=>{
                response.json().then(function(data) {
                    console.log(data);
                    let clienteList = new Array<Cliente>(); 

                    data.forEach(element => {
                        let cliente =  new Cliente();
                        cliente.Id = element.id;
                        cliente.email = element.email; 
                        cliente.nome = element.nome; 
                        clienteList.push(cliente); 
                    });
                    console.log(clienteList)
                    return clienteList; 
                  })
        }).catch(response=> {return 'Não deu'+ response})
    }

}

