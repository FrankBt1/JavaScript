const navSelector = document.getElementById("nav");

const options = [
  {
    title: "Ofertas de la semana",
    linkTo: "./outlet.html",
    opts: ["Laptops", "Audifonos", "Auriculares"],
  },
  {
    title: "Como comprar",
    linkTo: "./how.html",
    opts: ["Formas de pago", "Envíos", "Devoluciones"],
  },
  {
    title: "Costo y tarifas",
    linkTo: "./taxs.html",
    opts: ["Impuestos", "Facturación"],
  },
  {
    title: "Mis pedidos",
    linkTo: "./orders.html",
    opts: ["Pedir nuevamente", "Lista de deseos"],
  },
  { title: "Garantía", linkTo: "./warranty.html", opts: [""] },
];

// Crear enlaces para el menú de navegación
for (let option of options) {
  let anchor = document.createElement("a");
  anchor.className = "nav-button";
  anchor.textContent = option.title;
  anchor.href = option.linkTo;
  navSelector.appendChild(anchor);
}

// Crear elementos para el pie de página
const footerSelector = document.getElementById("footer");
for (let option of options) {
  const anchor = document.createElement("ul");
  anchor.className = "footer-ul";

  // Crear un elemento li para el título de la opción
  let li = document.createElement("li");
  li.className = "footer-main-item";
  let a = document.createElement("a");
  a.className = "footer-a";
  a.textContent = option.title;
  a.href = option.linkTo;
  li.appendChild(a);
  anchor.appendChild(li);

  // Crear elementos li para cada opción en opts
  for (let opt of option.opts) {
    let li = document.createElement("li");
    li.className = "footer-li";
    let a = document.createElement("a");
    a.className = "footer-a";
    a.textContent = opt;
    li.appendChild(a);
    anchor.appendChild(li);
  }

  // Agregar la lista al pie de página
  footerSelector.appendChild(anchor);
}
