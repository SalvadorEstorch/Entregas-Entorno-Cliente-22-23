import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { DetalleVideojuegoComponent } from './componentes/detalle-videojuego/detalle-videojuego.component';
import { ListadoVideojuegosComponent } from './componentes/listado-videojuegos/listado-videojuegos.component';
import { LoginComponent } from './componentes/login/login.component';
import { SobreNosotrosComponent } from './componentes/sobre-nosotros/sobre-nosotros.component';

//Aquí temos que definir todas las posibles rutas que pueda usar nuestra web luego
//para mostrar en <router-outlet></router-outlet> el componente que corresponda
//Esta primera que está en '' será la página por defecto
const routes: Routes = [
  {
    //Esta primera que está en '' será la página por defecto
    path: '', //cuando definimos el 'path' no puede empezar por '/'
    component: LoginComponent,
  },
  {
    path: 'log-out',
    component: LoginComponent,
  },
  {
    path: 'listado',
    component: ListadoVideojuegosComponent,
  },
  {
    path: 'videojuego/:id/:titulo/:compania/:imagen/:valoracion',
    component: DetalleVideojuegoComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
  {
    path: 'sobre-nosotros',
    component: SobreNosotrosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
