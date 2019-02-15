import {NgModule, Injectable} from '@angular/core'
import { Cliente } from './cliente.class';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';


@Injectable()
export class ClientesService{
    clis:Array<Cliente>; 
    constructor(private http: HttpClient){
    }

    clientes: Array<Cliente> = []; 

// https://www.typescriptlang.org/docs/handbook/basic-types.html
getClientes(){
    return this.http.get<Cliente[]>('http://localhost:3000/cliente').pipe(
        tap(console.log)
    );
    }
    getCliente(id: number){
        return this.http.get<Cliente>(`http://localhost:3000/cliente/${id}`).pipe(
            tap(console.log)
        );
    }
}

