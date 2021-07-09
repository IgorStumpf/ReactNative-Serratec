import { api } from "../api";

export const getCliente = () => {
	return api.get("/cliente").then((res) => res.data);
};
