/*function esPalindrome(cadena) {
  let caracteres = cadena.split("");// separa por caracteres
  let caracteresInvertidos = caracteres.reverse();// a los caracteres separados los invierte del final al inicio
  let cadenaInvertida = caracteresInvertidos.join("");// a los caracteres separados e invertidos los vuelve unir para verificar si la palabra es palindrome
  if (cadena === cadenaInvertida) {
    return true;
  } else {
    return false;
  }
}
console.log(esPalindrome("hola"));
console.log(esPalindrome("oso"));*/

function esPalindrome(cadena) {
  let rebanar = cadena.split("");
  let invertir = rebanar.reverse();
  let juntar = invertir.join("");
  if (cadena === juntar) {
    return true;
  } else {
    return false;
  }
}
console.log(esPalindrome("dabale arroz a la zorra el abad"));
console.log(esPalindrome("oso ese oso"));
