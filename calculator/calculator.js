/*
const numero1 = Number(prompt("ingrese primer numero"));
const numero2 = Number(prompt("ingrese segundo numero"));
const suma = numero1 + numero2;
const mensajeSuma = "el resultado de la suma es: " + suma;

const promedio = suma / 2;
console.log(promedio);
const triple = promedio * 3;
console.log(triple);
const resultadoMenosDiez = triple - 10;
console.log(resultadoMenosDiez);

const mensajeFinal = "la respeusta final es: " + resultadoMenosDiez;

alert(mensajeFinal);*/


// Pide al usuario la cantidad de números a sumar
const cantidad = Number(prompt("¿Cuántos números desea sumar?"));

// Inicia la variable "sumatoria" en cero
let sumatoria = 0;

//  Bucle for para iterar desde 1 hasta la cantidad ingresada por el usuario
for (let i = 1; i <= cantidad; i++) {
  // Pide al usuario el número a sumar en cada iteración
  const numeroAsumar = Number(prompt("Ingrese un número a sumar"));
  
  //  Actualiza el valor de "sumatoria" sumando el número capturado
  sumatoria = sumatoria + numeroAsumar;
}

// Imprime la sumatoria en la consola
console.log("La sumatoria de los números ingresados es:", sumatoria);

