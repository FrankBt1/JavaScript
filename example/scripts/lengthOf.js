function lengthOf(cadena) {
    if (cadena === "") {
        return "invalid input"
    }else {
        return cadena.length;
    }
};
console.log(lengthOf("hola"));
console.log(lengthOf(""));