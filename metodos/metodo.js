const cadena = "Hola Como te ENCUETRAS?";

/*charAt*/
console.log("CHARAT: " + cadena.charAt(0));
console.log("CHARAT: " + cadena.charAt(1));
console.log("CHARAT: " + cadena.charAt(2));
console.log("CHARAT: " + cadena.charAt(3));
console.log("CHARAT: " + cadena.charAt(cadena.length - 1));

/*slice*/
console.log("SLICE:" + cadena.slice(0, 6));
console.log("SLICE:" + cadena.slice(7, 10));
console.log("SLICE:" + cadena.slice(9,cadena.length - 1));



/*split*/

console.log("SPLIT:" + cadena.split("o"));
console.log("SPLIT:" + cadena.split(" "));//separa por palabras
console.log("SPLIT:" + cadena.split(""));// "" por carateres
console.log(typeof cadena.split(""));// "" por carateres


/*reverse*/
 
console.log("REVERSE: " + cadena.split(" ").reverse());
console.log("REVERSE: " + cadena.split("").reverse());

const arreglo = ["hola","como","te","encuentras","amigo"]
console.log(arreglo);
/*unshif agrega un elemento adelante del array*/

arreglo.unshift("¿¿¿")

/*push agrega un elemento ahcia el final...*/

arreglo.push("???")

console.log(arreglo);

/*shift para sacar el pirmer elemento*/
arreglo.shift()
console.log(arreglo);

/*pop para sacar el ultimo elemento*/
arreglo.pop()

console.log(arreglo);