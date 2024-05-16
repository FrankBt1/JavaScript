function stringIncludes(cadena1, cadena2) {
  if (cadena2.include(cadena1)) {
    return true;
  } else {
    return false;
  }
}

console.log(stringIncludes("mundo", "Hola mundo"));
console.log(stringIncludes("Hola", "Hola mundo"));
console.log(stringIncludes("hola", "Hola mundo"));
