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





// Inicia la variable "sumatoria" en cero
/*let sumatoria = 0;
const cantidad  = Number(prompt("¿Cuántos números desea sumar?"));

//  Bucle for para iterar desde 1 hasta la cantidad ingresada por el usuario
for (let index = 1; index <= cantidad; index++) {
  const numeroAsumar = Number(prompt("Ingrese un número a sumar"));
  sumatoria = sumatoria + numeroAsumar;
}

console.log("La sumatoria de los números ingresados es:", sumatoria);*/



const numero = Number(prompt("¿Cuántos números vas a sumar?"));
let suma = 0;

for (let index = 1; index <= numero; index++) {
  const resultado = Number(prompt("¿Cuáles son los números?"))
  suma = suma + resultado;
  
}

console.log(suma);