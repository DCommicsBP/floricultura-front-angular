import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ClientesModule } from './clientes/clientes.module';

import { AppComponent } from './app.component';
import { PlantasComponent } from './plantas/plantas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ClientesComponent } from './clientes/clientes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PlantaDetalheComponent } from './plantas/planta-detalhe/planta-detalhe.component';
import { ClienteDetalheComponent } from './clientes/cliente-detalhe/cliente-detalhe.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'plantas', component: PlantasComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'clientes', component:ClientesComponent },
  {path: 'cliente/cliente-detalhe/:id', component:ClienteDetalheComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PlantasComponent,
    UsuariosComponent,
    NavbarComponent,
    FooterComponent, 
    HomeComponent, 
    PlantaDetalheComponent,
    ClientesComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule, 
    HttpClientModule, 
    ClientesModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})

export class AppModule { }
//https://angular.io/guide/http
//https://cursos.alura.com.br/forum/topico-cors-com-fetch-api-44915