import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http', 
import * as axios from 'axios'

import { AppComponent } from './app.component';
import { PlantasComponent } from './plantas/plantas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ClientesComponent } from './clientes/clientes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PlantaDetalheComponent } from './plantas/planta-detalhe/planta-detalhe.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'plantas', component: PlantasComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'clientes', component:ClientesComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    PlantasComponent,
    UsuariosComponent,
    ClientesComponent,
    NavbarComponent,
    FooterComponent, 
    HomeComponent, PlantaDetalheComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule, 
    HttpClientModule
  ],
  providers: [{provide: Http, useValue: axios} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
//https://angular.io/guide/http