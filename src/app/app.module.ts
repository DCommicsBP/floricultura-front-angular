import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PlantasComponent } from './plantas/plantas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ClientesComponent } from './clientes/clientes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';


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
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
