function sumar(num1,num2) {
  const resultado = num1 + num2 
  console.log("El resultado de la suma es:  "+resultado); 
  return resultado;
}

const primeraSuma = sumar(10, 30);
console.log(primeraSuma);
const segundaSuma = sumar(-17, 100);
console.log(segundaSuma);
const terceraSuma = sumar(-1, 200);
console.log(terceraSuma);

const sumatotal = primeraSuma+segundaSuma+terceraSuma;
console.log("El resultado total es:  " + sumatotal);

const imprimirResultado = (num1,num2,operacion)=> {
    if (operacion==="sumar") {
        const suma =num1+num2
        console.log(suma);
        return suma
    } 
    else if (operacion==="restar") {
        const resta = num1-num2
        console.log(resta);
    }
}
imprimirResultado(10,20,"sumar")
imprimirResultado(100,10,"restar")


const imprimirNumero = (numero)=> console.log(numero);

imprimirNumero(20)
imprimirNumero(30)
imprimirNumero(50)