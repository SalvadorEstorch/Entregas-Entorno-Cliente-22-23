import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Videojuego } from 'src/app/entidades/videojuego';

@Component({
  selector: 'detalle-videojuego',
  templateUrl: './detalle-videojuego.component.html',
  styleUrls: ['./detalle-videojuego.component.css'],
})
export class DetalleVideojuegoComponent implements OnInit {
  //Creamos las siguientes variables públicas
  id: number = 0;
  titulo: string = '';
  compania: string = '';
  imagen: string = '';
  valoracion: number = 0;

  //A través del objeto Router recibimos los datos por PathParam de el
  //componente listado-videojuegos, y los guardamos dentro de las variables públicas
  constructor(route: ActivatedRoute) {
    this.id = route.snapshot.params['id'];
    this.titulo = route.snapshot.params['titulo'];
    this.compania = route.snapshot.params['compania'];
    this.imagen = route.snapshot.params['imagen'];
    this.valoracion = route.snapshot.params['valoracion'];
  }

  ngOnInit(): void {}
}
