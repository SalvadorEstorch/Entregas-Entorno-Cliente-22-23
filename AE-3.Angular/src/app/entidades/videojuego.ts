export class Videojuego {
  //El constructor que recibe por parametros de entrada los valores y crea el videojuego
  constructor(
    public id: number,
    public titulo: string,
    public compania: string,
    public imagen: string,
    public valoracion: number
  ) {
    this.id = id;
    this.titulo = titulo;
    this.compania = compania;
    this.imagen = imagen;
    this.valoracion = valoracion;
  }

  public toString(): string {
    return `Identificador: ${this.id}, Título: ${this.titulo}, Compañía: ${this.compania}, Imagen: ${this.imagen}, Valoración: ${this.valoracion}`;
  }
}
