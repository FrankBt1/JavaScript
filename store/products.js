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
  sellUnits(units) {
    if (units > this.stock){
      console.log("Error, no hay suficiente stock para vender "+ units + " unidades.");
    }
    else{
      this.stock = this.stock - units ;
      console.log("Unidades vendidas. Stock restante" + this.stock);
    }
  }

  get getsupplier() {
    return this._supplier;
  }
  set setsupplier(newName) {
    this._supplier = newName;
  }
}

const prod1 = new Product();
const prod2 = new Product("id123", "Producto 2", "price 50");
const prod3 = new Product(
  "id456",
  "Producto 3",
  100,
  10,
  ["imagen1.jpg", "imagen2.jpg"],
  true
);
const prod4 = new Product(
  "id456",
  "telefono",
  75,
  20,
  ["imagen1.jpg", "imagen2.jpg"],
  true,
  "nokia"
);
const prod5 = new Product(14356, "laptop", 1200, 12, "imagen.png", true, "samsung");

console.log(prod1);
console.log(prod2);
console.log(prod2.title);
console.log(prod3);
console.log(prod3.onsale);
console.log(prod4);
prod4.setsupplier = "movistar";
console.log(
  "producto actualizado con nuevo proveedor usando set a : " + prod4.getsupplier
);

prod5.sellUnits(10);
prod5.sellUnits(5);
console.log(prod5);

