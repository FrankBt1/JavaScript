class Persona {
  constructor(nombre, apellido, edad) {
    this._nombre = nombre;
    this._apelllido = apellido;
    this._edad = edad;
  }
  nombreyedad() {
    return this._nombre + " " + this._apelllido + " " + this._edad;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    return (this._nombre = nombre);
  }
  get apellido() {
    return this._apelllido;
  }
  set apellido(apellido) {
    return (this._apelllido = apellido);
  }
  get edad() {
    return this._edad;
  }
  set edad(edad) {
    return (this._edad = edad);
  }
}

let persona1 = new Persona("juan", "perez", 35);
console.log(persona1);
console.log(persona1.nombre);
console.log(persona1.apellido);
console.log(persona1.edad);
persona1.nombre = "cristian";
persona1.apellido = "palacios";
persona1.edad = 10;
console.log(persona1);
