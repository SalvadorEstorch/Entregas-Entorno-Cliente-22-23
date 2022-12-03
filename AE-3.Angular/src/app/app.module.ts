import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoVideojuegosComponent } from './componentes/listado-videojuegos/listado-videojuegos.component';
import { DetalleVideojuegoComponent } from './componentes/detalle-videojuego/detalle-videojuego.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoVideojuegosComponent,
    DetalleVideojuegoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
