import createHttp from "./BaseService";

const http = createHttp(true);

export const getAddresses = () =>
  http.get("/users/addresses").then((res) => res);
  
export const createAddress = (body) =>
  http.post("/users/addresses", body).then((res) => res);

export const updateAddress = (id, body) =>
  http.put(`/users/addresses/${id}`, body).then((res) => res);

export const deleteAddress = (id) =>
  http.delete(`/users/addresses/${id}`).then((res) => res);
