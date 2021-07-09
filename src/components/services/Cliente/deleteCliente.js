import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { api } from "../api";
import axios from "axios";

const DeleteCliente = () => {
	state = {
		//    this.getCliente
		// id: 5,
		// nome: "Cleberson Carlos",
		// usuario: "clebinho",
		// cpf:56943214055,
		// email:"kleb1990@email.com",
		// dataNascimento:"2001-07-11T00:00:00Z",
		// endereco:
		//         {rua:"Rua das Ruas",
		//         numero:99,
		//         complemento:"",
		//         bairro:"Distrito 1",
		//         cidade:"Cidade-Alerta",
		//         estado:"AL",
		//         cep:52742264}
	};

	onRequest = async () => {
		try {
			const res = await axios.delete(
				"https://ecommerce-api-penguin.herokuapp.com/cliente",
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
					<Text> Deletar </Text>
				</TouchableOpacity>
			</View>
		</>
	);
};

export default DeleteCliente;
