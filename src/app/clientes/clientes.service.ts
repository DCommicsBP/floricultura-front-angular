import {NgModule, Injectable} from '@angular/core'

@Injectable()
export class ClientesService{
    constructor(){
        this.pessoas = this.getClientes()
    }

    pessoas: any = {}; 

    getClientes(){
        fetch(
            'http://localhost:3000/cliente',
            {   method: 'GET',
                mode: 'cors',
        
            }).then((response)=>{
                response.json().then(function(data) {
                    console.log(data);
                  })
        }).catch(response=> {return 'Não deu'+ response})


    }

}

