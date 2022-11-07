import createHttp from "./BaseService";

const http = createHttp(true);

export const getCurrentUser = () => http.get("/users/me");

export const getUsers = () => http.get("/users").then((res) => res);

export const getDetail = (id) => http.get(`/users/${id}`).then((res) => res);

export const createUser = (body) =>
  http.post("/users", body).then((res) => res);

export const updateUser = (id, body) =>
  http.put(`/users/${id}/edit`, body).then((res) => res);

export const deleteUser = (id) =>
  http.delete(`/users/${id}/delete`).then((res) => res);
