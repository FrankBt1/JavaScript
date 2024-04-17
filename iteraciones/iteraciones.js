let suma = 0;
const hastaDondeSumar = prompt("Hasta que numero deseas sumar?")

/*desde donde empieza, hasta donde termina y como debe sumar.   index = i*/
for (let i = 1; i <= hastaDondeSumar; i++) {
  suma = suma + i;
}

alert("El resultado de la suma es:" + suma);
