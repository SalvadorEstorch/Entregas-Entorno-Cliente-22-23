import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/entidades/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //Lista que contendrá los usuarios inicializada a vacío
  listaUsuarios: Usuario[] = [];
  //Variables que se quieren mostrar posteriormente en el html
  //Las dos primeras están conectadas usando Two Way Binding con
  //el html para que en el momento en el que el usuario introduzca
  //el usuario y o la contraseña se actualice en estas variables, y viceversa
  usuario: string = '';
  contrasena: string = '';
  //Esta la usaremos para despelgar un mensaje de error
  mensaje: string = '';

  //En el constructor creamos dos usuarios
  constructor(private router: Router) {
    let usuario: Usuario;
    usuario = new Usuario('Pepe', '1234');
    this.listaUsuarios.push(usuario);
    usuario = new Usuario('Juan', '6789');
    this.listaUsuarios.push(usuario);
  }

  //Este método usa el conocido for con if anidado para comprobar si el usuario
  // y la contraseña están en nuestra base de datos.
  //En caso afirmativo le mandaremos a la página de listado, y si no, le mostraremos un error
  public validarUsuario(): void {
    for (let i = 0; i < this.listaUsuarios.length; i++) {
      if (
        this.listaUsuarios[i].usuario == this.usuario &&
        this.listaUsuarios[i].contrasena == this.contrasena
      ) {
        this.router.navigate(['/listado']);
      } else {
        this.mensaje = 'Usuario o contraseña incorrectos';
      }
    }
  }

  ngOnInit(): void {}
}
