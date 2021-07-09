import { api } from "../api";

export const getCliente = () => {
	api.get("/cliente/").then((res) => res.data);
};
