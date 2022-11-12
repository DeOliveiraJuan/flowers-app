import createHttp from "./BaseService";

const http = createHttp(true);

export const getCart = (id) => http.get(`/cart/${id}`);

export const createCart = (body) => http.post("/cart", body).then((res) => res);

export const addProdcutToCart = (cartId, productId) =>
  http.put(`/cart/add/${cartId}`, { productId }).then((res) => res);

export const removeProductFromCart = (cartId, productId) =>
  http.put(`/cart/remove/${cartId}`, { productId }).then((res) => res);

export const updateUserId = (id, userId) =>
  http.put(`/cart/${id}`, { userId }).then((res) => res);
