const calcularVelocidad = (distancia, tiempo) => {
  /*const distancia = 10
    const tiempo = 2*/
  const velocidad = distancia * tiempo;
  return velocidad;
};

let velocidad1 = calcularVelocidad(5, 3);
console.log("la velocidad de Juan es:" +velocidad1);
let velocidad2 = calcularVelocidad(2, 3);
console.log("la velocidad de pedro es:" +velocidad2);
let velocidad3 = calcularVelocidad(2, 3);
console.log("la velocidad de pablo es:" +velocidad3);
