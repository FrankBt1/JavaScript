const navSelector = document.getElementById("nav");
const footerSelector = document.getElementById("footer");

const navOptions = [
  { title: "Inicio", linkTo: "./index.html", opts: [] },
  { title: "Productos", linkTo: "./products.html", opts: [] },
  { title: "Contacto", linkTo: "./contact.html", opts: [] },
  { title: "Acerca de", linkTo: "./about.html", opts: [] },
];

// Crear enlaces para el menú de navegación
for (let option of navOptions) {
  const anchor = document.createElement("a");
  anchor.className = "nav-a";
  anchor.textContent = option.title;
  anchor.href = option.linkTo;
  navSelector.appendChild(anchor);
}

const footerOptions = [
  { title: "Ofertas", linkTo: "./outlet.html", opts: ["Laptops", "Audio", "Auriculares"] },
  { title: "Cómo comprar", linkTo: "./how.html", opts: ["Formas de pago", "Envíos", "Devoluciones"] },
  { title: "Costos y tarifas", linkTo: "./taxs.html", opts: ["Impuestos", "Facturacion"] },
  { title: "Mis pedidos", linkTo: "./orders.html", opts: ["Pedir nuevamente", "Lista de deseos"] },
  { title: "Garantía", linkTo: "./warranty.html", opts: [""] },
];

// Crear elementos para el pie de página
for (let option of footerOptions) {
  const anchor = document.createElement("ul");
  anchor.className = "footer-ul";

  let li = document.createElement("li");
  li.className = "footer-main-item";

  let a = document.createElement("a");
  a.className = "footer-a";
  a.textContent = option.title;
  a.href = option.linkTo;
  li.appendChild(a);
  anchor.appendChild(li);

  for (let opt of option.opts) {
    let li = document.createElement("li");
    li.className = "footer-li";

    let a = document.createElement("a");
    a.className = "footer-a";
    a.textContent = opt;

    li.appendChild(a);
    anchor.appendChild(li);
  }

  footerSelector.appendChild(anchor);
}
