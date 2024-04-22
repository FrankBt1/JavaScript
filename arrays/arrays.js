const arreglo = ["primer", 25, "hola", { name: "eggsy" }, true];

const edades = [15, 20, 30, 80];

console.log("PRIMER ELEMENTO DE UN ARRRAY:" + arreglo[0]);
console.log("SEGUNDO ELEMENTO DE UN ARRRAY:" + arreglo[1]);
console.log("TERCER ELEMENTO DE UN ARRRAY:" + arreglo[2]);
console.log("ULTIMO ELEMENTO DE UN ARRRAY:" + arreglo[arreglo.length - 1]);

for (let i = 0; i < edades.length; i++) {
  console.log(edades[i]);
  console.log("La edad de la persoan es: " + edades[i]);
}

for (let edad of edades) {
    console.log("la edad con for es:" + edad)
}

for (let cadaElemento of arreglo) {
    console.log(cadaElemento);
}
