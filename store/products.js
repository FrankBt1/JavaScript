/*const producto1 = {
  nombre: "celular",
  precio: 100000,
  stock: 2,
};

producto1.id = "id123";
producto1["foto"] = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";

console.log(producto1);
console.log(producto1.nombre);*/

class Product {
  constructor(id, title, price, stock, images, onsale, supplier) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.onsale = onsale;
    this._supplier = supplier;
  }
  //recuperar o obtener algo
  get getsupplier() {
    return this._supplier;
  }
  //cambiar algo
  set setSupplier(newName) {
    this._supplier = newName;
  }
  sellUnits(units) {
    if (this.stock >= units) {
      this.stock -= units;
      console.log("Se vendieron" + units + "unidades.");
    } else {
      console.log(
        `Error: No hay suficiente stock para vender ${units} unidades.`
      );
    }
  }
}

const prod1 = new Product();
console.log(prod1);
const prod2 = new Product("id123", "Producto 2", "price 50");
console.log(prod2);
const prod3 = new Product(
  "id456",
  "Producto 3",
  100,
  10,
  ["imagen1.jpg", "imagen2.jpg"],
  true
);
console.log(prod3);
const prod4 = new Product(
  "id456",
  "leche",
  75,
  20,
  ["imagen1.jpg", "imagen2.jpg"],
  true
);
console.log(prod4);

prod4.setsupplier = "coca cola";
console.log("Proveedor actualizado usando setter:", prod4.setsupplier);

const prod5 = new Product("id789", "Producto 5", 100, 12, [], false);
console.log(prod5);

prod5.sellUnits(10);
prod5.sellUnits(5);
