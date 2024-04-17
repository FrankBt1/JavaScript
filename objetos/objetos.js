const producto = {
  nombre: "celular",
  precio: 1000,
  stock: 15,
};

console.log(producto);

producto["id"] = "0021458adb";
producto["foto"]= "https://i.blogs.es/98ea49/1366_2000/1366_2000.webp";
producto.detalle = "camara HD";
producto.color = "plateado";



console.log(producto);

delete producto.foto;
delete ["id"];


console.log(producto);