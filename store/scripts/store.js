//inicia el variable que acumula total a pagar
const comprar = () => {
  let totalApagar = 0;
for (let i = 1; i <= 1; i++) {
  const nombre = prompt("¿Qué producto desea llevar?");
  let cantidad = Number(prompt("¿Cuántas unidades?"));
  let precio = Number(prompt("¿Cuánto sale cada unidad"));
  const subtotal = cantidad * precio;
  totalApagar += subtotal;
  console.log(`Producto: ${nombre}, Unidades: ${cantidad}, Precio unitario: ${precio}, Sub total: ${subtotal}`);
  
}
  console.log(totalApagar);
  return totalApagar;
}
 const total1 = comprar();
 const total2 = comprar();
 const total3 = comprar();
 const total = total1 + total2 + total3;
 
 console.log("El total registrado es: " +total);

