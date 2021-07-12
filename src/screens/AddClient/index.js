/* import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { AddCliente } from '../../components/services/Cliente';

import { InputClient } from "../InputClient";
import { ActionButton } from "../ActionButton";

export const AddClient = () => {
	const [nome, setNome] = useState("");
	const [usuario, setUsuario] = useState("");
	const [cpf, setCpf] = useState("");
	const [email, setEmail] = useState("");
	const [dataNascimento, setDataNascimento] = useState("");
	const [rua, setRua] = useState("");
	const [numero, setNumero] = useState("");
	const [complemento, setComplemento] = useState("");
	const [bairro, setBairro] = useState("");
	const [cidade, setCidade] = useState("");
	const [estado, setEstado] = useState("");
	const [cep, setCep] = useState("");

	const submit = (e) => {
		let cliente = {
			nome: nome,
			usuario: usuario,
			cpf: cpf,
			email: email,
			dataNascimento: dataNascimento,
			endereco: {
				rua: rua,
				numero: numero,
				complemento: complemento,
				bairro: bairro,
				cidade: cidade,
				estado: estado,
				cep: cep,
			};
		};
	};


	}
		addCliente(cliente){
			.then((d) => {
				alert("Cliente registrado com sucesso!");
				console.log(d);
			})
			.catch((error) => alert(error));
	};
	
	return (
		<View style={styles.container}>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.scrollView}
			>

			<TextInput onSubmitEditing={(e) => {
				e.preventDefault();
				submit(e);
			}}
			<InputClient
				label="Nome"
          		placeHold="Digite seu nome"
          		onChangeText={(e) => setNome(e.target.value)}
        	/>
			<InputClient
				label="Usuário"
          		placeHold="Digite seu usuário"
          		onChangeText={(e) => setUsuario(e.target.value)}
        	/>
			<InputClient
				label="CPF"
          		placeHold="Digite seu CPF"
          		onChangeText={(e) => setCpf(e.target.value)}
        	/>
			<InputClient
				label="E-mail"
          		placeHold="Digite seu e-mail"
          		onChangeText={(e) => setEmail(e.target.value)}
        	/>
			<InputClient
				label="Data de Nascimento"
          		placeHold="Digite sua data de nascimento"
          		onChangeText={(e) => setDataNascimento(e.target.value)}
        	/>
			<InputClient
				label="Logradouro"
          		placeHold="Digite seu logradouro"
          		onChangeText={(e) => setRua(e.target.value)}
        	/>
			<InputClient
				label="Numero"
          		placeHold="Digite o número da sua residência"
          		onChangeText={(e) => setNumero(e.target.value)}
        	/>
			<InputClient
				label="Complemento"
          		placeHold="Digite o complemento da sua residência"
          		onChangeText={(e) => setComplemento(e.target.value)}
        	/>
			<InputClient
				label="Bairro"
          		placeHold="Digite seu bairro"
          		onChangeText={(e) => setBairro(e.target.value)}
        	/>
			<InputClient
				label="CIdade"
          		placeHold="Digite seu cidade"
          		onChangeText={(e) => setCidade(e.target.value)}
        	/>
			<InputClient
				label="Estado"
          		placeHold="Digite seu estado"
          		onChangeText={(e) => setEstado(e.target.value)}
        	/>
			<InputClient
				label="CEP"
          		placeHold="Digite seu CEP"
          		onChangeText={(e) => setCep(e.target.value)}
        	/>

		</View>
	);
};

		<View style={styles.container}>
			<View style={styles.content}>
				<View style={styles.form}>
					<ClientForm />
				</View>
			</View>
			<Footer style={styles.footer} />
		</View>
	);
};

 */
