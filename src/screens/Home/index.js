import React, { useState, useEffect } from "react";
import { View, FlatList, ScrollView, Text } from "react-native";
import { styles } from "./styles";
import { SearchButton } from "../../components/Search";
import { Footer } from "../../components/Footer";
import { getCliente } from "../../components/services/Cliente";
import { Section } from "../../components/Section";
import { ModalView } from "../../components/ModalView";
import { AddButton } from "../../components/AddButton";

export const Home = () => {
	const [clientes, setClientes] = useState([]);

	useEffect(() => {
		getCliente()
			.then((data) => setClientes(data))
			.catch((err) => {
				console.error("ops! ocorreu um erro" + err);
			});
	}, []);

	return (
		<View style={styles.mainContainer}>
			<SearchButton />
			<AddButton />
			<View style={styles.flatlist}>
				<FlatList
					data={clientes}
					keyExtractor={(item) => item.nome}
					renderItem={({ item }) => <Section nome={item.nome} />}
				/>
			</View>
			<Footer />
		</View>
	);
};
