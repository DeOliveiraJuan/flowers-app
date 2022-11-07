import createHttp from "./BaseService";

const http = createHttp(true);

export const getCart = () => http.get("/carts");
export const getCurrentCart = () => http.get("/carts/me");

export const createCart = (body) =>
  http.post('/carts', body).then((res) => res); 

export const updateCart = (id, body) =>
  http.post(`/carts/${id}`, body).then((res) => res);

export const deleteCart = (id) =>
  http.post(`/carts/${id}/delete`).then((res) => res);