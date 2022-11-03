import createHttp from "./BaseService";

const http = createHttp(true);

export const getProducts = () => http.get("/products").then((res) => res);
export const getFlowers = () => http.get("/products/flowers").then((res) => res);
export const getPlants = () => http.get("/products/plants").then((res) => res);

export const getProductDetail = (id) => http.get(`/products/${id}`).then((res) => res);

export const createProduct = (body) =>
  http.post("/products", body).then((res) => res);

export const updateProduct = (id, body) =>
  http.post(`/products/${id}`, body).then((res) => res);

export const deleteProduct = (id) =>
  http.post(`/products/${id}/delete`).then((res) => res);