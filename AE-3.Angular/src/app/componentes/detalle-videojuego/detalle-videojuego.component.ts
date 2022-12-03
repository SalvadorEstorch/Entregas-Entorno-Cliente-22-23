import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Videojuego } from 'src/app/entidades/videojuego';

@Component({
  selector: 'detalle-videojuego',
  templateUrl: './detalle-videojuego.component.html',
  styleUrls: ['./detalle-videojuego.component.css'],
})
export class DetalleVideojuegoComponent implements OnInit {
  id: number = 0;
  titulo: string = '';
  compania: string = '';
  imagen: string = '';
  valoracion: number = 0;

  constructor(route: ActivatedRoute) {
    this.id = route.snapshot.params['id'];
    this.titulo = route.snapshot.params['titulo'];
    this.compania = route.snapshot.params['compania'];
    this.imagen = route.snapshot.params['imagen'];
    this.valoracion = route.snapshot.params['valoracion'];
  }

  ngOnInit(): void {}
}
