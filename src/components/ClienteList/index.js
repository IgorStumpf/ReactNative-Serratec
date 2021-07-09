import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { getCliente } from "../services/Cliente";
import { Section } from "../Section";

export const ClienteList = () => {
	const [clientes, setClientes] = useState([]);

	useEffect(() => {
		getCliente()
			.then((data) => setClientes(data))
			.catch((err) => {
				console.error("ops! ocorreu um erro" + err);
			});
		console.log(clientes);
	}, []);

	return (
		<View>
			{clientes.map(({ nome, id }) => (
				<Section key={id} nome={nome} />
			))}
		</View>
	);
};
