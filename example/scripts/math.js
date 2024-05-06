function palindrome(value) {
    const stringValue = String(value); // Convertimos el valor a string para trabajar con caracteres
    
    // Método Math.abs(x): Devuelve el valor absoluto de x
    const absValue = Math.abs(value);
    
    // Método Math.ceil(x): Devuelve el entero más próximo mayor o igual a un número dado
    const ceilValue = Math.ceil(value);
    
    // Método Math.floor(x): Devuelve el entero más próximo menor o igual a un número dado
    const floorValue = Math.floor(value);
    
    // Método Math.round(x): Devuelve el valor de un número redondeado al entero más cercano
    const roundValue = Math.round(value);
    
    // Método Math.max(x1, x2, ..., xn): Devuelve el número con el valor más alto
    const maxValue = Math.max(...stringValue.split('').map(Number));
    
    // Método Math.min(x1, x2, ..., xn): Devuelve el número con el valor más bajo
    const minValue = Math.min(...stringValue.split('').map(Number));
    
    // Método Math.random(): Devuelve un número pseudo-aleatorio entre 0 y 1
    const randomNumber = Math.random();
    
    // Verificamos si el valor original es un palíndromo
    const isPalindrome = stringValue === stringValue.split('').reverse().join('');
    
    return {
        originalValue: value,
        isPalindrome: isPalindrome,
        absValue: absValue,
        ceilValue: ceilValue,
        floorValue: floorValue,
        roundValue: roundValue,
        maxValue: maxValue,
        minValue: minValue,
        randomNumber: randomNumber
    };
}

// Ejemplo de uso
const result = palindrome(12321);
console.log(result);
