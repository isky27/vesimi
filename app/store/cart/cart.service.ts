import axios from "axios";

const getCart = async () => {
  const response = await axios.get("/cart");
  return response.data;
};

export const cartService = {
  getCart,
};
