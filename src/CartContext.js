import { createContext, useState } from "react";
import { items, getProductInfo } from "./myProducts";

export const CartContext = createContext({
  items: [],
  getItemQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function getItemQuantity(id) {
    const quantity = cartItems.find(item => item.id === id)?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  // Add item to cart
  function addOneToCart(id) {
    const quantity = getItemQuantity(id);

    if (quantity === 0) {
      setCartItems([
        ...cartItems,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      setCartItems(
        cartItems.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  }

  //Remove item from cart
  function removeOneFromCart(id) {
    const quantity = getItemQuantity(id);

    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartItems(
        cartItems.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }

  //Delete item from cart
  function deleteFromCart(id) {
    setCartItems((cartItems) =>
      cartItems.filter((currentItem) => {
        return currentItem.id != id;
      })
    );
  }

  //Get total cost for all items
  function getTotalCost() {
    let totalCost = 0;
    cartItems.map((item) => {
      const productData = getProductInfo(item.id);
      totalCost += productData.price * item.quantity;
    });
    return totalCost;
  }

  const contextValue = {
    items: cartItems,
    getItemQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
