import createHttp from "./BaseService";

const http = createHttp(true);

export const getAddresses = (id) => http.get(`/users/${id}/addresses`).then((res) => res);