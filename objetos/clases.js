class Persona {
  constructor(nombre, vida) {
    this.nombre = nombre;
    this.vida = vida;
  }
  comer(cantidad){
    this.vida = this.vida + cantidad
    console.log("La vida de "+this.nombre+" acaba de aumentar a : " + this.vida);
  }
  entrenar(cantidad) {
    this.vida = this.vida - cantidad
    console.log("La vida de "+ this.nombre+"acaba de disminuir por entrenar: " +this.vida);
  }
}

const juan = new Persona("juan", 100);
const maria = new Persona("maria", 200);

console.log(juan);
console.log(maria);

juan.comer(10)
juan.comer(50)
juan.comer(5)
juan.entrenar(30)


maria.comer(20)
maria.entrenar(50)
maria.comer(40)













