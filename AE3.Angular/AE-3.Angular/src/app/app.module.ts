import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoVideojuegosComponent } from './componentes/listado-videojuegos/listado-videojuegos.component';
import { DetalleVideojuegoComponent } from './componentes/detalle-videojuego/detalle-videojuego.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './componentes/menu/menu.component';
import { SobreNosotrosComponent } from './componentes/sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

@NgModule({
  //Aquí tienen que aparecer declarados todos los componentes que usemos en nuestra app
  declarations: [
    AppComponent,
    ListadoVideojuegosComponent,
    DetalleVideojuegoComponent,
    LoginComponent,
    MenuComponent,
    SobreNosotrosComponent,
    ContactoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
