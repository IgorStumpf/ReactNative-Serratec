import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";

import { styles } from "./styles";
import { ClientContext } from "../../Contexts/ClientContext";

import { useNavigation } from "@react-navigation/native";
import { Footer } from "../../components/Footer";
import { ClientForm } from "../../components/ClientForm";
import { updateCliente } from "../../components/services/Cliente";

export const UpdateClient = () => {
	const navigation = useNavigation();
	function putClient(data) {
		updateCliente(data)
			.then((res) => {
				alert("Atualizado com sucesso!");
				navigation.navigate("Home");
			})

			.catch((err) => alert(err));
	}

	function printClient() {
		console.log(cliente);
	}

	return (
		<>
			<View style={styles.container}>
				<View style={styles.content}>
					<View style={styles.form}>
						<ClientForm handleRequest={putClient} />
					</View>
				</View>
				<Footer style={styles.footer} />
			</View>
		</>
	);
};
