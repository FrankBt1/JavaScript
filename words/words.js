const frase = prompt("ingrese una palabra o frase");
const cantidad = frase.length;
const mensajeCantidad ="la frase ingresada tiene un total de caracteres de: " + cantidad;

console.log(mensajeCantidad);

const fraseMinusculas = frase.toLowerCase();
const fraseMayusculas = frase.toUpperCase();
const minMay = fraseMayusculas + fraseMinusculas;

console.log("La frase en minúsculas y luego en mayúsculas es: " + minMay);