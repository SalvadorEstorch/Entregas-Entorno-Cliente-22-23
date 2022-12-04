import { Component, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/entidades/videojuego';
import { Router } from '@angular/router';

@Component({
  selector: 'listado-videojuegos',
  templateUrl: './listado-videojuegos.component.html',
  styleUrls: ['./listado-videojuegos.component.css'],
})
export class ListadoVideojuegosComponent implements OnInit {
  //Creamos una lista que contendrá nuestros videojegos y la
  //inicializamos a vacío
  listaVideojuegos: Videojuego[] = [];

  //En el constructor se crea el objeto Router
  //Dentro del constructor crearemos los videojuegos y los
  //meteremos en la lista que creamos antes
  constructor(private router: Router) {
    //esta variable apuntará al juego que estamos creando
    let videojuego: Videojuego;
    //Aquí se crea el primer videojuego
    videojuego = new Videojuego(
      1,
      'Minecraft',
      'assets/img/logo-minecraft.png',
      'Mojang Studios',
      4.5
    );
    //Y aquí lo añadimos a la lista. ¡MUY IMPORTANTE!
    this.listaVideojuegos.push(videojuego);
    videojuego = new Videojuego(
      8,
      'Fortnite',
      'assets/img/logo-fortnite.png',
      'Epic Games',
      4.3
    );
    this.listaVideojuegos.push(videojuego);
  }

  //Este método se sirve de un for con if anidado para encontrar el objeto
  //videojuego que el usuario quiere ver, y devuelve ese mismo objeto
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

  //Cómo su propio nombre indica este método hace el routing programático.
  //Sirviendose del anterior método busca el objeto que quiere el usuario,
  // y pasa por parámetros PathParam los datos a el componente detalle que los mostrará
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
