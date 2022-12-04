export class Usuario {
  constructor(public usuario: string, public contrasena: string) {
    this.usuario = usuario;
    this.contrasena = contrasena;
  }

  public toString(): string {
    return `Usuario: ${this.usuario}, Contraseña: ${this.contrasena}`;
  }
}
