import { products } from "../data/products.js";

export const getProducts = () => {
  return products;
};

export const calculateTotal = (cartItems) => {
  return cartItems.reduce(
    (accumulator, item) => accumulator + item.product.price * item.quantity,
    0
  );
};
