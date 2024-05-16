function titleFormat(cadena) {
  let primeraLetra = cadena.charAt(0);
  let restoTitulo = cadena.slice(1);

  primeraLetra = primeraLetra.toUpperCase();
  restoTitulo = restoTitulo.toLowerCase();

  let resultado = primeraLetra + restoTitulo;
  return `la cadena ${resultado} tiene una longitud de ${resultado.length}`
}
console.log(titleFormat("EJEMPLO")); 
console.log(titleFormat("JavaScript")); 
console.log(titleFormat("hola mundo"));