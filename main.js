// ===== Câu 1: Constructor Product =====
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// ===== Câu 2: Mảng products (ít nhất 6 sản phẩm, 2 danh mục) =====
let products = [
  new Product(1, "Laptop Dell", 25000000, 5, "Electronics", true),
  new Product(2, "Chuột Logitech", 500000, 20, "Accessories", true),
  new Product(3, "Bàn phím cơ", 1500000, 0, "Accessories", false),
  new Product(4, "iPhone 15", 35000000, 3, "Electronics", true),
  new Product(5, "Tai nghe Sony", 3000000, 10, "Accessories", true),
  new Product(6, "Màn hình Samsung", 7000000, 2, "Electronics", true),
];

let namePriceList = products.map((p) => ({
  name: p.name,
  price: p.price,
}));
let inStockProducts = products.filter((p) => p.quantity > 0);
let hasExpensiveProduct = products.some((p) => p.price > 30000000);
let allAccessoriesAvailable = products
  .filter((p) => p.category === "Accessories")
  .every((p) => p.isAvailable === true);

let totalValue = products.reduce((sum, p) => {
  return sum + p.price * p.quantity;
}, 0);

let sellingAndInStock = products
  .filter((p) => p.isAvailable && p.quantity > 0)
  .map((p) => p.name);

function showData() {
  let output = document.getElementById("output");

  let text = "";

  text += "=== Câu 3: Name + Price ===\n";
  namePriceList.forEach((p) => {
    text += `${p.name} - ${p.price}\n`;
  });

  text += "\n=== Câu 4: Sản phẩm còn hàng ===\n";
  inStockProducts.forEach((p) => {
    text += `${p.name} (SL: ${p.quantity})\n`;
  });

  text += "\n=== Câu 5 ===\n";
  text += hasExpensiveProduct
    ? "Có sản phẩm trên 30 triệu\n"
    : "Không có sản phẩm trên 30 triệu\n";

  text += "\n=== Câu 6 ===\n";
  text += allAccessoriesAvailable
    ? "Tất cả Accessories đang bán\n"
    : "Không phải tất cả Accessories đang bán\n";

  text += "\n=== Câu 7: Tổng giá trị kho ===\n";
  text += totalValue + " VND\n";

  text += "\n=== Câu 8: for...of ===\n";
  for (let p of products) {
    let status = p.isAvailable ? "Đang bán" : "Ngừng bán";
    text += `${p.name} - ${p.category} - ${status}\n`;
  }
  text += "\n=== Câu 9: for...in (Product đầu tiên) ===\n";
  for (let key in products[0]) {
    text += `${key} : ${products[0][key]}\n`;
  }
  text += "\n=== Câu 10: Đang bán & còn hàng ===\n";
  sellingAndInStock.forEach((name) => {
    text += name + "\n";
  });

  output.textContent = text;
}
