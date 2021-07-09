import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getCliente } from "../services/Cliente";
import { api } from "../services/api";
import { Section } from "../Section";

export const ClienteList = () => {
	const [clientes, setClientes] = useState([]);

	useEffect(() => {
		api.get("/cliente/")
			.then((response) => setClientes(response.data))
			.catch((err) => {
				console.error("ops! ocorreu um erro" + err);
				console.log(clientes);
			});
	}, []);

	return (
		<View>
			{clientes.map((cliente) => (
				<Section key={cliente.id} nome={cliente.nome} />
			))}
		</View>
	);
};
