import createHttp from "./BaseService";

const http = createHttp(true);

export const getCustomersContacts = () =>
  http.get("/customersContacts").then((res) => res);

export const createCustomersContacts = (body) =>
  http.post("/customersContacts", body).then((res) => res);

export const updateCustomersContacts = (id, body) =>
  http.put(`/customersContacts/${id}`, body).then((res) => res);

export const deleteCustomersContact = (id) =>
  http.delete(`/customersContacts/${id}`).then((res) => res);
