
class Product {
  constructor(id, title, price, stock, images, onsale, supplier, colors, description, taxPolicy) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.onsale = onsale;
    this._supplier = supplier;
    this.colors = colors;
    this.description = description;
    this.taxPolicy = taxPolicy;
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


const prod1 = new Product(123, "audifonos", 50, 20, ["imagen4.jpg"], true, "logitech", ["red", "yellow"], "A lovely product",  "Incluye impuesto País y percepción AFIP");
const prod2 = new Product(456, "mouse",  100,  10, ["imagen1.jpg", "imagen2.jpg","iamgen3"], true, "genius", ["white", "black"], "An amazing product", "Incluye impuesto País y percepción AFIP");
const prod3 = new Product(456, "telefono", 75, 20,["imagen7.jpg", "imagen8.jpg","imagen9.jpg"], true, "nokia", ["blue", "green", "orange"], "A fantastic product", "Incluye impuesto País y percepción AFIP");
const prod4 = new Product(14356, "laptop", 1200, 12, ["imagen6.png"], true, "samsung", ["orange", "purple"], "A wonderful product", "Incluye impuesto País y percepción AFIP");
const prod5 = new Product(1598, "teclados", 90, 23, ["imagenes3.jpg"], true, "torito", ["pink", "silver"], "A stunning product", "Incluye impuesto País y percepción AFIP");
const prod6 = new Product(1898, "radio", 120, 20, ["imagenes5.jpg", false, "avalanch"], ["brown", "cyan"], "A remarkable product", "Incluye impuesto País y percepción AFIP")


const products = [prod1, prod2, prod3, prod4,prod5, prod6]
