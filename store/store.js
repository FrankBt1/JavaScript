//inicia el variable que acumula total a pagar
let totalApagar = 0;
for (let i = 1; i <= 2; i++) {
  const nombre = prompt("¿Qué producto desea llevar?");
  let cantidad = Number(prompt("¿Cuántas unidades?"));
  let precio = Number(prompt("¿Cuánto sale cada unidad"));

  const subtotal = cantidad * precio;
  totalApagar += subtotal;
  console.log("El total a pagar es: $" + totalApagar);
}
