const items = [
  {
    id: 1,
    name: "TV",
    price: 1199.99,
  },
  {
    id: 2,
    name: "Laptop",
    price: 2199.99,
  },
  {
    id: 3,
    name: "Camera",
    price: 599.99,
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 299.99,
  },
  {
    id: 5,
    name: "Bluetooth Mouse",
    price: 89.99,
  },
  {
    id: 6,
    name: "Playstation 5",
    price: 899.99,
  },
];

function getProductInfo(id) {
  let productInfo = items.find((product) => product.id === id);
  if ((productInfo == undefined)) {
    console.log("No Such Product Exsist For ID: " + id);
    return undefined;
  }

  return productInfo;
}

export { items, getProductInfo };
