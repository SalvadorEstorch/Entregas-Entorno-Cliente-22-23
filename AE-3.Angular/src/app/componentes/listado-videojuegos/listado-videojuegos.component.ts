import { Component, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/entidades/videojuego';
import { Router } from '@angular/router';

@Component({
  selector: 'listado-videojuegos',
  templateUrl: './listado-videojuegos.component.html',
  styleUrls: ['./listado-videojuegos.component.css'],
})
export class ListadoVideojuegosComponent implements OnInit {
  listaVideojuegos: Videojuego[] = [];

  constructor(private router: Router) {
    let videojuego: Videojuego;
    videojuego = new Videojuego(
      1,
      'Minecraft',
      'assets/img/logo-minecraft.png',
      'Softonic',
      4.5
    );
    this.listaVideojuegos.push(videojuego);
    videojuego = new Videojuego(
      8,
      'Final fantasi',
      'assets/img/logo-fortnite.png',
      'compañía',
      4.5
    );
    this.listaVideojuegos.push(videojuego);
  }

  public buscarVideojuego(id: number): Videojuego {
    let videojuego = new Videojuego(0, 'prueba', 'prueba', 'prueba', 0);
    for (let i = 0; i < this.listaVideojuegos.length; i++) {
      if (this.listaVideojuegos[i].id == id) {
        videojuego = this.listaVideojuegos[i];
        break;
      }
    }
    return videojuego;
  }

  public routingProgramatico(id: number) {
    let vj: Videojuego;
    vj = this.buscarVideojuego(id);
    this.router.navigate([
      '/videojuego',
      vj.id,
      vj.titulo,
      vj.imagen,
      vj.compania,
      vj.valoracion,
    ]);
  }
  ngOnInit(): void {}
}
