import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { api } from "../api";
import axios from "axios";

const AddCliente = () => {
	state = {
		id: 6,
		nome: "marcos",
		usuario: "Marc",
	};

	onRequest = async () => {
		try {
			const res = await axios.post(
				"https://ecommerce-api-penguin.herokuapp.com",
				{ ...this.state }
			);
			return res.data;
		} catch (erro) {
			console.log("erro : ", erro);
		}
	};
	return (
		<>
			<View>
				<TouchableOpacity onPress={this.onRequest}>
					<Text> Postar </Text>
				</TouchableOpacity>
			</View>
		</>
	);
};
export default AddCliente;
